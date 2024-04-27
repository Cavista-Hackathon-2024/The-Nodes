// ignore_for_file: prefer_const_constructors, deprecated_member_use

import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:flutter_svg/svg.dart';
import 'package:the_nodes_heathcare/src/features/dashboard/chat.dart';
import 'package:the_nodes_heathcare/src/features/dashboard/coummunity.dart';
import 'package:the_nodes_heathcare/src/features/dashboard/home_screen.dart';

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
          children:  [
           DashBoardScreen(),
            CommunutiyScreen(),
            ChatScreen(),
            Scaffold(),
          ],
        ),
        bottomNavigationBar: BottomNavigationBar(
          type: BottomNavigationBarType.fixed,
          showUnselectedLabels: true,

          selectedItemColor: const Color(0xFF04B6F7),
          // selectedIconTheme: const IconThemeData(color: Color(0xFFFFE974)),
          unselectedItemColor: const Color(0xFFBABABA),
          items: [
            BottomNavigationBarItem(
                icon: Icon(Icons.dashboard_rounded,
                    size: 24,
                    color: _selectedIndex == 0
                        ? Color(0xFF04B6F7)
                        : Color(0XFFBABABA)),
                label: 'Dashboard'),
            BottomNavigationBarItem(
                icon: SvgPicture.asset(
                  'assets/icons/people.svg',
                  color: _selectedIndex == 1
                      ? Color(0xFF04B6F7)
                      : Color(0XFFBABABA),
                ),
                label: 'Community'),
            BottomNavigationBarItem(
                icon: SvgPicture.asset(
                  'assets/icons/message.svg',
                  color: _selectedIndex == 2
                      ? Color(0xFF04B6F7)
                      : Color(0XFFBABABA),
                ),
                label: 'Chat'),
            BottomNavigationBarItem(
                icon: SvgPicture.asset(
                  'assets/icons/profile.svg',
                  color: _selectedIndex == 3
                      ? Color(0xFF04B6F7)
                      : Color(0XFFBABABA),
                ),
                label: 'Profile'),
          ],
          currentIndex: _selectedIndex,
          onTap: _onItemTapped,
        ));
  }
}
