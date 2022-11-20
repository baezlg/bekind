package com.example.ngo.controller;

import com.example.ngo.entity.Picture;

import com.example.ngo.service.PictureService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;


@RestController
@RequiredArgsConstructor
public class PictureController {
    private final PictureService pictureService;

    @PostMapping("/upload")
    public Picture uploadFile (@RequestParam("file") MultipartFile file) throws Exception {
        return pictureService.savePicture(file);
    }


}






//        public ResponseData uploadFile(@RequestParam("file") MultipartFile file) throws Exception {
//        Picture picture =null;
//        String downloadURL="";




//        downloadURL = ServletUriComponentsBuilder.fromCurrentRequest()
//                .path("/download")
//                .path(picture.getPictureId())
//                .toUriString();
//
//        return new ResponseData(picture.getFileName(),
//                downloadURL,
//                file.getContentType(),
//                file.getSize());



