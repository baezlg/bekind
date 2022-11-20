package com.example.ngo.service.impl;

import com.example.ngo.entity.Picture;
import com.example.ngo.entity.Post;
import com.example.ngo.repository.PostRepository;
import com.example.ngo.service.PostService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;


@Service
@RequiredArgsConstructor
public class PostServiceImpl implements PostService {
    private final PostRepository postRepository;

    @Override
    public Post addNewPost (Post post) {

        return postRepository.save(post);
    }

}
