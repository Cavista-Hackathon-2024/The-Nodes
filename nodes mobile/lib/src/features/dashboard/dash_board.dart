// ignore_for_file: prefer_const_constructors, deprecated_member_use

import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

class HomeScreen extends ConsumerStatefulWidget {
  const HomeScreen({super.key});

  @override
  ConsumerState<ConsumerStatefulWidget> createState() => _HomeScreenState();
}

class _HomeScreenState extends ConsumerState<HomeScreen> {
  int _selectedIndex = 0;
  void _onItemTapped(int index) {
    setState(() {
      _selectedIndex = index;
    });
    print(_selectedIndex);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        extendBodyBehindAppBar: true,
        body: IndexedStack(
          index: _selectedIndex,
          children: const [
            Scaffold(),
            Scaffold(),
            Scaffold(),
            Scaffold(),
          ],
        ),
        bottomNavigationBar: BottomNavigationBar(
          type: BottomNavigationBarType.fixed,
          showUnselectedLabels: true,
          // fixedColor: const Color(0xFFFFE974),
          backgroundColor: Color(0XFF121212),
          selectedItemColor: const Color(0xFFFFE974),
          // selectedIconTheme: const IconThemeData(color: Color(0xFFFFE974)),
          unselectedItemColor: const Color(0xFF8E9094),
          items: [
            BottomNavigationBarItem(
                icon: Icon(Icons.home_rounded,
                    size: 20,
                    color: _selectedIndex == 0
                        ? Color(0xFFFFE974)
                        : Color(0XFF8E9094)),
                label: 'Home'),
            BottomNavigationBarItem(
                icon: Icon(
                  Icons.home,
                  color: _selectedIndex == 1
                      ? Color(0xFFFFE974)
                      : Color(0XFF8E9094),
                ),
                label: 'Live TV'),
            BottomNavigationBarItem(
                icon: Icon(
                  Icons.home,
                  color: _selectedIndex == 2
                      ? Color(0xFFFFE974)
                      : Color(0XFF8E9094),
                ),
                label: 'Discover'),
            BottomNavigationBarItem(
                icon: Icon(
                  Icons.home,
                  color: _selectedIndex == 3
                      ? Color(0xFFFFE974)
                      : Color(0XFF8E9094),
                ),
                label: 'Library'),
            BottomNavigationBarItem(
                icon: Icon(
                  Icons.home,
                  color: _selectedIndex == 4
                      ? Color(0xFFFFE974)
                      : Color(0XFF8E9094),
                ),
                label: 'Profile'),
          ],
          currentIndex: _selectedIndex,
          onTap: _onItemTapped,
        ));
  }
}
