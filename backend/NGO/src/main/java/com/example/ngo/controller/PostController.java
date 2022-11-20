package com.example.ngo.controller;


import com.example.ngo.entity.AppUser;
import com.example.ngo.entity.Picture;
import com.example.ngo.entity.Post;
import com.example.ngo.service.PostService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping
@RequiredArgsConstructor
@Slf4j
public class PostController {

    private final PostService postService;


    @PostMapping( value = {"/addNewPost"}, consumes = {MediaType.MULTIPART_FORM_DATA_VALUE})
    public ResponseEntity<Post> addNewPost(@RequestPart("post") Post post){
        log.debug("REST request to create Post");
        return  ResponseEntity.ok().body(postService.addNewPost(post));

    }

    @GetMapping(value = {"/posts/{offset}/{pageSize}"}, consumes = {MediaType.MULTIPART_FORM_DATA_VALUE})
    public ResponseEntity<Page<Post>> searchPosts(@PathVariable("offset") Integer offset,
                                                  @PathVariable("pageSize") Integer pageSize){
        log.debug("get all posts");
        return  ResponseEntity.ok().body(postService.searchPosts(offset,pageSize));

    }



}
