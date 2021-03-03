import Mock from 'mockjs';

// 导入模拟数据
import db from './db.json';

Mock.mock('/api/db', 'get', db.agents);