package com.spring.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.spring.model.Note;

/**
 * 
 * @author rahulsahu
 *
 */

@Repository
public interface NoteRepository extends JpaRepository<Note, Long> {

}
