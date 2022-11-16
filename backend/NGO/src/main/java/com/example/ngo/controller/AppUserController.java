package com.example.ngo.controller;


import com.example.ngo.entity.AppUser;
import com.example.ngo.service.AppUserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;


@RestController
@RequestMapping
@RequiredArgsConstructor
@Slf4j
public class AppUserController {
    private final AppUserService userService;

    @PostMapping( "/user")
    public ResponseEntity<AppUser> registerUser(@RequestBody AppUser appUser){
        log.debug("REST request to create AppUser ");
        URI uri = URI.create(ServletUriComponentsBuilder.fromCurrentContextPath()
                .path("/api/user").toUriString());

        return  ResponseEntity.created(uri).body(userService.registerUser(appUser));

    }

}
