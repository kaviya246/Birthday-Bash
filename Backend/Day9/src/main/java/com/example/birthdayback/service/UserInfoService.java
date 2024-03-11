 package com.example.birthdayback.service;

// import java.util.List;

// import com.example.birthdayback.dto.UserInfoDto;

// public interface UserInfoService {

//     UserInfoDto createUser(UserInfoDto userDto);

//     UserInfoDto getUserById(Long userId);

//     List<UserInfoDto> getAllUsers();

//     UserInfoDto updateUser(Long userId, UserInfoDto userDto);

//     void deleteUser(Long userId);

//     UserInfoDto  getUserRolesByName(UserInfoDto userDto);

    
// }



import java.util.List;

import com.example.birthdayback.dto.UserInfoDto;


public interface UserInfoService {

    UserInfoDto getUserInfoById(Integer userId);

    UserInfoDto updateUserInfo(Integer userId, UserInfoDto userInfoDto);

    void deleteUserInfo(Integer userId);

    List<String> getUserRolesByName(String username);

    Integer getUserIdByName(String username);

}
