using Confluent.Kafka;
using System;
using System.Threading;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace KafkaChatWinForms
{
    public partial class Form1 : Form
    {
        //private readonly string topic = "chat-topic";
        private readonly string topic = "chat-message";

        private ProducerConfig producerConfig = new ProducerConfig
        {
            BootstrapServers = "localhost:9092"
        };

        private ConsumerConfig consumerConfig = new ConsumerConfig
        {
            BootstrapServers = "localhost:9092",
            GroupId = "chat-group",
            AutoOffsetReset = AutoOffsetReset.Earliest
        };

        private CancellationTokenSource cancellationTokenSource = new CancellationTokenSource();

        public Form1()
        {
            InitializeComponent();

            this.Load += Form1_Load;
            this.FormClosing += Form1_FormClosing;
            btnSend.Click += btnSend_Click;
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            StartConsumer();
        }

        private async void btnSend_Click(object sender, EventArgs e)
        {
            if (string.IsNullOrWhiteSpace(txtMessage.Text))
                return;

            using var producer = new ProducerBuilder<Null, string>(producerConfig).Build();

            try
            {
                await producer.ProduceAsync(topic, new Message<Null, string>
                {
                    Value = txtMessage.Text
                });

                txtMessage.Clear();
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message);
            }
        }

        private void StartConsumer()
        {
            Task.Run(() =>
            {
                using var consumer = new ConsumerBuilder<Ignore, string>(consumerConfig).Build();

                consumer.Subscribe(topic);

                try
                {
                    while (!cancellationTokenSource.Token.IsCancellationRequested)
                    {
                        var result = consumer.Consume(cancellationTokenSource.Token);

                        BeginInvoke(new Action(() =>
                        {
                            lstMessages.Items.Add(result.Message.Value);
                            lstMessages.TopIndex = lstMessages.Items.Count - 1;
                        }));
                    }
                }
                catch (OperationCanceledException)
                {
                }
                finally
                {
                    consumer.Close();
                }
            });
        }

        private void Form1_FormClosing(object sender, FormClosingEventArgs e)
        {
            cancellationTokenSource.Cancel();
        }

        private void label1_Click(object sender, EventArgs e)
        {
        }

        private void label2_Click(object sender, EventArgs e)
        {
        }
    }
}