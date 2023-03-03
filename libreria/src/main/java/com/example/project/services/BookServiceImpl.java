package com.example.project.services;

import com.example.project.entities.Book;
import com.example.project.repositories.BaseRepository;
import com.example.project.repositories.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BookServiceImpl extends BaseServiceImpl<Book,Long> implements BookService {

    @Autowired
    private BookRepository bookRepository;

    public BookServiceImpl(BaseRepository<Book, Long> baseRepository){
        super(baseRepository);
    }
}
