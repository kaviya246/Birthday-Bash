package com.example.birthdayback.service.Implementation;

// import java.util.List;
// import java.util.stream.Collectors;

// import org.springframework.stereotype.Service;

// import com.example.birthdayback.dto.*;
// import com.example.birthdayback.entity.*;
// import com.example.birthdayback.exception.*;
// import com.example.birthdayback.mapper.*;
// import com.example.birthdayback.repository.*;
// import com.example.birthdayback.service.UserInfoService;

// import lombok.AllArgsConstructor;

// @Service
// @AllArgsConstructor
// public class UserInfoServiceImpl implements UserInfoService {


//      private UserRepository userRepository;

//     @Override
//     public UserInfoDto createUser(UserInfoDto userDto) {
//         User user = UserMapper.mapToUser(userDto);
//         User savedUser = userRepository.save(user);
//         return UserMapper.mapToUserDto(savedUser);
//     }

//     @Override
//     public UserInfoDto getUserById(Long userId) {
//         User user = userRepository.findById(userId)
//                 .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + userId));
//         return UserMapper.mapToUserDto(user);
//     }

//     @Override
//     public List<UserInfoDto> getAllUsers() {
//         List<User> users = userRepository.findAll();
//         return users.stream().map(UserMapper::mapToUserDto).collect(Collectors.toList());
//     }

//     @Override
//     public UserInfoDto updateUser(Long userId, UserInfoDto userDto) {
//         User existingUser = userRepository.findById(userId)
//                 .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + userId));
//         User updatedUser = UserMapper.mapToUser(userDto);
//         updatedUser.setId(existingUser.getId());
//         User savedUser = userRepository.save(updatedUser);
//         return UserMapper.mapToUserDto(savedUser);
//     }

//     @Override
//     public void deleteUser(Long userId) {
//         userRepository.deleteById(userId);
//     }


// }


import lombok.AllArgsConstructor;

import java.util.*;

import org.springframework.stereotype.Service;

import com.example.birthdayback.dto.UserInfoDto;
import com.example.birthdayback.entity.UserInfo;
import com.example.birthdayback.exception.ResourceNotFoundException;
import com.example.birthdayback.mapper.UserInfoMapper;
import com.example.birthdayback.repository.UserInfoRepository;
import com.example.birthdayback.service.UserInfoService;




@Service
@AllArgsConstructor
public class UserInfoServiceImpl implements UserInfoService {

    private final UserInfoRepository userInfoRepository;

    @Override
    public UserInfoDto getUserInfoById(Integer userId) {
        UserInfo userInfo = userInfoRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User information not found with id: " + userId));
        return UserInfoMapper.mapToUserInfoDto(userInfo);
    }

    @Override
    public UserInfoDto updateUserInfo(Integer userId, UserInfoDto userInfoDto) {
        UserInfo existingUserInfo = userInfoRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User information not found with id: " + userId));
    
        if(userInfoDto.getName() != null) {
            existingUserInfo.setName(userInfoDto.getName());
        }
        if(userInfoDto.getEmail() != null) {
            existingUserInfo.setEmail(userInfoDto.getEmail());
        }

        UserInfo savedUserInfo = userInfoRepository.save(existingUserInfo);
        return UserInfoMapper.mapToUserInfoDto(savedUserInfo);
    }
    
    @Override
    public List<String> getUserRolesByName(String username) {
        Optional<UserInfo> userInfoOptional = userInfoRepository.findByName(username);
        if (userInfoOptional.isPresent()) {
            return Collections.singletonList(userInfoOptional.get().getRoles());
        } else {
            throw new ResourceNotFoundException("User information not found with username: " + username);
        }
    }

    @Override
    public Integer getUserIdByName(String username) {
        Optional<UserInfo> userInfoOptional = userInfoRepository.findByName(username);
        if (userInfoOptional.isPresent()) {
            return userInfoOptional.get().getId();
        } else {
            throw new ResourceNotFoundException("User information not found with username: " + username);
        }
    }

    @Override
    public void deleteUserInfo(Integer userId) {
        if (!userInfoRepository.existsById(userId)) {
            throw new ResourceNotFoundException("User information not found with id: " + userId);
        }
        userInfoRepository.deleteById(userId);
    }
}