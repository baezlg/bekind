package com.example.ngo.service.impl;

import com.example.ngo.entity.AppUser;
import com.example.ngo.repository.AppUserRepository;
import com.example.ngo.service.AppUserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;



@Service
@RequiredArgsConstructor
public class AppUserServiceImpl implements AppUserService {
    private final AppUserRepository userRepository;


    @Override
    public AppUser registerUser (AppUser appUser) {
//        Optional<AppUser> appUserDB = userRepository.findBy(email);
        return userRepository.save(appUser);
    }
}
