package com.example.ngo.service.impl;

import com.example.ngo.entity.AppUser;
import com.example.ngo.exception.UserNotFoundException;
import com.example.ngo.model.LoginCredentials;
import com.example.ngo.repository.AppUserRepository;
import com.example.ngo.service.AppUserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;


@Service
@RequiredArgsConstructor
public class AppUserServiceImpl implements AppUserService {
    private final AppUserRepository userRepository;


    @Override
    public AppUser registerUser (AppUser appUser) {
//        Optional<AppUser> appUserDB = userRepository.findBy(email);
        return userRepository.save(appUser);
    }

    @Override
    public String searUserByEmail (LoginCredentials credentials) throws UserNotFoundException {
        String email = credentials.getEmail();
        String password = credentials.getPassword();

        Optional<AppUser> userDb = userRepository.findByEmailIgnoreCase(email);

        if (userDb.isEmpty() || !password.equals(userDb.get().getPassword())){
            throw new UserNotFoundException("invalid credentials");
        }
        return "welcome back" + " " + userDb.get().getFirstName();
    }
}
