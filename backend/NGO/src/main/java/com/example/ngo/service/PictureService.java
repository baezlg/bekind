package com.example.ngo.service;

import com.example.ngo.entity.Picture;
import org.springframework.web.multipart.MultipartFile;

public interface PictureService {

    Picture savePicture (MultipartFile file) throws Exception;
}
