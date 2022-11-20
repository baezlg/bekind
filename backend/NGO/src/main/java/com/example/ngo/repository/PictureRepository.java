package com.example.ngo.repository;

import com.example.ngo.entity.Picture;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PictureRepository  extends JpaRepository<Picture,String> {
}
