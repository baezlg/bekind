package com.example.ngo.service.impl;


import com.example.ngo.entity.Post;
import com.example.ngo.repository.PostRepository;
import com.example.ngo.service.PostService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;





@Service
@RequiredArgsConstructor
public class PostServiceImpl implements PostService {
    private final PostRepository postRepository;

    @Override
    public Post addNewPost (Post post) {

        return postRepository.save(post);
    }

    @Override
    public Page<Post> searchPosts (Integer offset, Integer pageSize) {
        Pageable pageable = PageRequest.of(offset,pageSize);
        return postRepository.findAll(pageable);
    }

}
