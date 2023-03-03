package com.example.project.repositories;

import com.example.project.entities.Book;
import org.springframework.stereotype.Repository;

@Repository
public interface BookRepository extends BaseRepository<Book, Long>{
}
