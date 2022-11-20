package com.example.ngo.service.impl;

import com.example.ngo.entity.Picture;
import com.example.ngo.repository.PictureRepository;
import com.example.ngo.service.PictureService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

@Service
@RequiredArgsConstructor
public class PictureServiceImpl implements PictureService {
    private final PictureRepository pictureRepository;


    @Override
    public Picture savePicture (MultipartFile file) throws Exception {
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());
        try{
            if(fileName.contains(".")){
                throw new Exception("Filename contains invalid path sequence" + fileName);
            }
            Picture picture = new Picture(
                    fileName,
                    file.getContentType(),
                    file.getBytes());
            return  pictureRepository.save(picture);
        }catch (Exception e){
            throw new Exception("Could not save File: " + fileName);

        }
    }
}
