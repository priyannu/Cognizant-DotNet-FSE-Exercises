namespace KafkaChatWinForms
{
    partial class Form1
    {
        /// <summary>
        ///  Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        ///  Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        ///  Required method for Designer support - do not modify
        ///  the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            label1 = new Label();
            btnSend = new Button();
            lstMessages = new ListBox();
            txtMessage = new TextBox();
            label2 = new Label();
            SuspendLayout();
            // 
            // label1
            // 
            label1.AutoSize = true;
            label1.Location = new Point(48, 29);
            label1.Name = "label1";
            label1.Size = new Size(82, 25);
            label1.TabIndex = 0;
            label1.Text = "Message\r\n";
            label1.Click += label1_Click;
            // 
            // btnSend
            // 
            btnSend.Location = new Point(433, 51);
            btnSend.Name = "btnSend";
            btnSend.Size = new Size(112, 34);
            btnSend.TabIndex = 1;
            btnSend.Text = "Send\r\n";
            btnSend.UseVisualStyleBackColor = true;
            // 
            // lstMessages
            // 
            lstMessages.FormattingEnabled = true;
            lstMessages.ItemHeight = 25;
            lstMessages.Location = new Point(48, 218);
            lstMessages.Name = "lstMessages";
            lstMessages.Size = new Size(331, 154);
            lstMessages.TabIndex = 2;
            // 
            // txtMessage
            // 
            txtMessage.Location = new Point(48, 407);
            txtMessage.Name = "txtMessage";
            txtMessage.Size = new Size(150, 31);
            txtMessage.TabIndex = 3;
            // 
            // label2
            // 
            label2.AutoSize = true;
            label2.Location = new Point(48, 134);
            label2.Name = "label2";
            label2.Size = new Size(90, 25);
            label2.TabIndex = 4;
            label2.Text = "Messages\r\n";
            label2.Click += label2_Click;
            // 
            // Form1
            // 
            AutoScaleDimensions = new SizeF(10F, 25F);
            AutoScaleMode = AutoScaleMode.Font;
            ClientSize = new Size(800, 450);
            Controls.Add(label2);
            Controls.Add(txtMessage);
            Controls.Add(lstMessages);
            Controls.Add(btnSend);
            Controls.Add(label1);
            Name = "Form1";
            Text = "Kafka Chat Application";
            Load += Form1_Load;
            ResumeLayout(false);
            PerformLayout();
        }

        #endregion

        private Label label1;
        private Button btnSend;
        private ListBox lstMessages;
        private TextBox txtMessage;
        private Label label2;
    }
}
