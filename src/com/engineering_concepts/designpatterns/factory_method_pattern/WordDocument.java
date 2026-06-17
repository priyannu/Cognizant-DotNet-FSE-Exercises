package com.engineering_concepts.designpatterns.factory_method_pattern;

public class WordDocument implements Document {

    @Override
    public void open() {
        System.out.println("Opening Word Document");
    }
}
