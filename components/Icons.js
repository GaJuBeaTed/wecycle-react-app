import * as React from 'react';
import { Entypo } from '@expo/vector-icons';

import Colors from '../constants/Colors';


export default function TabBarIcon(props) {
    return (
      <Entypo
        name={props.name}
        size={props.size || 30}
        style={props.style || { marginBottom: -3 }}
        color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      />
    );
  }