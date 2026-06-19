package com.engineering_concepts.designpatterns.factory_method_pattern;

public class PdfDocument implements Document {

    @Override
    public void open() {
        System.out.println("Opening PDF Document");
    }
}