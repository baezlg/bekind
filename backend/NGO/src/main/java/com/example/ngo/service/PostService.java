package com.example.ngo.service;

import com.example.ngo.entity.Post;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface PostService {
    Post addNewPost (Post post);

    Page<Post> searchPosts (Integer offset, Integer pageSize);
}
