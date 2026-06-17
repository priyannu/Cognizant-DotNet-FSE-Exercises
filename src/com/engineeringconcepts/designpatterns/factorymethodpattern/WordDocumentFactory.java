package com.engineeringconcepts.designpatterns.factorymethodpattern;

public class WordDocumentFactory extends DocumentFactory {

    @Override
    public Document createDocument() {
        return new WordDocument();
    }
}
