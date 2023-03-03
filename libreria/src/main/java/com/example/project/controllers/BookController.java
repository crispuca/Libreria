package com.example.project.controllers;

import com.example.project.entities.Book;
import com.example.project.services.BookServiceImpl;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(path = "api/v1/books")
public class BookController extends BaseControllerImpl<Book, BookServiceImpl> {
}
