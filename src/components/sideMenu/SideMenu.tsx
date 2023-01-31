import React from 'react';
import styles from './SideMenu.module.css';
import { sideMenuList } from './mockup';
import { Menu } from 'antd';
import { GifOutlined } from '@ant-design/icons';

interface SideMenuProps {}

export const SideMenu: React.FC = (props: SideMenuProps) => {
  return (
    <div>
      <Menu
        className={styles['side-menu']}
        mode={'vertical'}
        items={sideMenuList.map((menu) => ({
          label: menu.title,
          icon: <GifOutlined />,
          key: menu.title,
          children: menu.subMenu.map((subMenu) => ({
            label: subMenu.title,
            icon: <GifOutlined />,
            key: menu.title,
          })),
        }))}
      ></Menu>
    </div>
  );
};
