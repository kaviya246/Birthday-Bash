package com.example.birthdayback.controller;

// import  java.util.List;
// import org.springframework.http.HttpStatus;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.CrossOrigin;
// import org.springframework.web.bind.annotation.DeleteMapping;
// import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.PathVariable;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.PutMapping;
// import org.springframework.web.bind.annotation.RequestBody;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RestController;

// import com.example.birthdayback.dto.UserInfoDto;
// import com.example.birthdayback.service.UserService;

// import lombok.AllArgsConstructor;

// @AllArgsConstructor
// @RestController
// @CrossOrigin(origins = "*")
// @RequestMapping("/api/users")
// public class UserInfoController {
//     private UserService userService;

//     @PostMapping
//     public ResponseEntity<UserInfoDto> createUser(@RequestBody UserInfoDto userDto) {
//         UserInfoDto savedUser = userService.createUser(userDto);
//         return new ResponseEntity<>(savedUser, HttpStatus.CREATED);
//     }

//     @GetMapping("{id}")
//     public ResponseEntity<UserInfoDto> getUserById(@PathVariable("id") Long userId) {
//         UserInfoDto userDto = userService.getUserById(userId);
//         return ResponseEntity.ok(userDto);
//     }

//     @GetMapping
//     public ResponseEntity<List<UserInfoDto>> getAllUsers() {
//         List<UserInfoDto> users = userService.getAllUsers();
//         return ResponseEntity.ok(users);
//     }


//     @PutMapping("{id}")
//     public ResponseEntity<UserInfoDto> updateUser(@PathVariable("id") Long userId, @RequestBody UserInfoDto userDto) {
//         UserInfoDto updatedUser = userService.updateUser(userId, userDto);
//         return ResponseEntity.ok(updatedUser);
//     }

//     @DeleteMapping("{id}")
//     public ResponseEntity<Void> deleteUser(@PathVariable("id") Long userId) {
//         userService.deleteUser(userId);
//         return ResponseEntity.noContent().build();
//     }
// }
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import com.example.birthdayback.dto.UserInfoDto;
import com.example.birthdayback.service.UserInfoService;

import java.util.*;
import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@CrossOrigin(origins="*")
@RequestMapping("/api/users")
public class UserInfoController {

    private UserInfoService userInfoService;

    @GetMapping("/{userId}")
    public ResponseEntity<UserInfoDto> getUserInfo(@PathVariable("userId") Integer userId) {
        UserInfoDto userInfoDto = userInfoService.getUserInfoById(userId);
        return ResponseEntity.ok(userInfoDto);
    }
    @PreAuthorize("hasAuthority('ADMIN')")
    @PutMapping("/{userId}")
    public ResponseEntity<UserInfoDto> updateUserInfo(@PathVariable("userId") Integer userId, @RequestBody UserInfoDto userInfoDto) {
        UserInfoDto updatedUserInfo = userInfoService.updateUserInfo(userId, userInfoDto);
        return ResponseEntity.ok(updatedUserInfo);
    }
    @GetMapping("/roles/{username}")
    public ResponseEntity<List<String>> getUserRolesByName(@PathVariable("username") String username) {
        List<String> roles = userInfoService.getUserRolesByName(username);
        return ResponseEntity.ok(roles);
    }
    @PreAuthorize("hasAuthority('ADMIN')")
    @DeleteMapping("/{userId}")
    public ResponseEntity<Void> deleteUserInfo(@PathVariable("userId") Integer userId) {
        userInfoService.deleteUserInfo(userId);
        return ResponseEntity.noContent().build();
    }
    @GetMapping("/id/{username}")
    public ResponseEntity<Integer> getUserIdByName(@PathVariable("username") String username) {
        Integer userId = userInfoService.getUserIdByName(username);
        return ResponseEntity.ok(userId);
    }
}