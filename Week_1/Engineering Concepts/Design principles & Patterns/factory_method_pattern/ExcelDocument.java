package com.engineering_concepts.designpatterns.factory_method_pattern;

public class ExcelDocument implements Document {

    @Override
    public void open() {
        System.out.println("Opening Excel Document");
    }
}
