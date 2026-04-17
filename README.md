# Vue3-TS-CMS-API

Vue3-TS-CMS 是基于 NodeJS、TypeScript 、Koa、MySQL 等技术实现的后台管理系统 API 。拥有系统总览（核心技术、商品统计）、系统管理（用户管理、部门管理、菜单管理、角色管理）、商品中心（商品分类、商品信息）、动态（动态主页、动态列表）的 API 。采用 REST 设计风格。



## 一、运行步骤

#### 1. 安装 pnpm ？

   ```shell
   npm install pnpm -g
   ```

#### 2. 安装依赖

   ```shell
   pnpm add .
   ```

#### 3. 在 MySQL 创建一个名为 vue3_ts_cms 的数据库，然后将 database/vue3_ts_cms.sql 文件导入进去


###### 第一步：登录MySQL
```bash
mysql -u root -p
```
然后输入你的MySQL密码

###### 第二步：创建数据库（复制直接运行）
```sql
CREATE DATABASE vue3_ts_cms CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
```

###### 第三步：使用这个数据库
```sql
use vue3_ts_cms;
```

###### 第四步：导入 sql 文件（**最重要**）

```sql
source D:\www\project\database\vue3_ts_cms.sql; # Windows 写法
```
```sql
source /Users/xxx/www/project/database/vue3_ts_cms.sql; # Mac / Linux 写法
```

出现 `Query OK...` 说明导入成功 ✅

---


#### 4. 配置 .env 文件

   ```shell
   APP_HOST=http://localhost # 项目运行的主机
   APP_PORT=9000  # 项目运行的端口号
   
   MYSQL_HOST=localhost # MySQL 运行的主机
   MYSQL_PORT=3306 # MySQL 运行的端口号
   MYSQL_USER=root # MySQL 用户名
   MYSQL_PASSWORD=root # MySQL 密码
   MYSQL_DATABASE=vue3_ts_cms # MySQL 数据库名称
   ```

#### 5. 启动 

   ```shell
   pnpm start
   ```



##  二、API 文档



### 1. 认证相关

#### 1.1 登录
- **请求方式**: POST
- **接口路径**: `/api/login`
- **请求参数**:
  | 参数名 | 类型 | 必选 | 描述 |
  | --- | --- | --- | --- |
  | name | string | 是 | 用户名 |
  | password | string | 是 | 密码 |
- **响应示例**:
  ```json
  {
    "code": 200,
    "data": {
      "id": 1,
      "name": "Jesen0823",
      "token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9..."
    }
  }
  ```

#### 1.2 测试授权
- **请求方式**: GET
- **接口路径**: `/api/test`
- **请求头**:
  | 参数名 | 类型 | 必选 | 描述 |
  | --- | --- | --- | --- |
  | Authorization | string | 是 | Bearer Token |
- **响应示例**:
  ```json
  {
    "code": 200,
    "data": "授权成功~"
  }
  ```

### 2. 用户相关

####  2.1 创建用户
- **请求方式**: POST
- **接口路径**: `/api/users`
- **请求头**:
  | 参数名 | 类型 | 必选 | 描述 |
  | --- | --- | --- | --- |
  | Authorization | string | 是 | Bearer Token |
- **请求参数**:
  | 参数名 | 类型 | 必选 | 描述 |
  | --- | --- | --- | --- |
  | name | string | 是 | 用户名 |
  | password | string | 是 | 密码 |
  | departmentId | number | 是 | 部门ID |
  | roleId | number | 是 | 角色ID |
  | avatarUrl | string | 否 | 头像URL |
- **响应示例**:
  ```json
  {
    "code": 200,
    "data": "创建用户成功~"
  }
  ```

#### 2.2 删除用户
- **请求方式**: DELETE
- **接口路径**: `/api/users/{userId}`
- **请求头**:
  | 参数名 | 类型 | 必选 | 描述 |
  | --- | --- | --- | --- |
  | Authorization | string | 是 | Bearer Token |
- **响应示例**:
  ```json
  {
    "code": 200,
    "data": "删除用户成功~"
  }
  ```

#### 2.3 更新用户
- **请求方式**: PATCH
- **接口路径**: `/api/users/{userId}`
- **请求头**:
  | 参数名 | 类型 | 必选 | 描述 |
  | --- | --- | --- | --- |
  | Authorization | string | 是 | Bearer Token |
- **请求参数**:
  | 参数名 | 类型 | 必选 | 描述 |
  | --- | --- | --- | --- |
  | name | string | 否 | 用户名 |
  | password | string | 否 | 密码 |
  | departmentId | number | 否 | 部门ID |
  | roleId | number | 否 | 角色ID |
  | avatarUrl | string | 否 | 头像URL |
- **响应示例**:
  ```json
  {
    "code": 200,
    "data": "修改用户成功~"
  }
  ```

####  2.4 获取用户详情
- **请求方式**: GET
- **接口路径**: `/api/users/{userId}`
- **请求头**:
  | 参数名 | 类型 | 必选 | 描述 |
  | --- | --- | --- | --- |
  | Authorization | string | 是 | Bearer Token |
- **响应示例**:
  ```json
  {
    "code": 200,
    "data": {
      "id": 1,
      "name": "Jesen0823",
      "departmentId": 1,
      "roleId": 1,
      "avatarUrl": "http://localhost:9000/users/1/avatar/123.jpg"
    }
  }
  ```

####  2.5 获取用户列表
- **请求方式**: POST
- **接口路径**: `/api/users/list`
- **请求头**:
  | 参数名 | 类型 | 必选 | 描述 |
  | --- | --- | --- | --- |
  | Authorization | string | 是 | Bearer Token |
- **请求参数**:
  | 参数名 | 类型 | 必选 | 描述 |
  | --- | --- | --- | --- |
  | offset | number | 否 | 偏移量 |
  | size | number | 否 | 每页数量 |
  | name | string | 否 | 用户名（模糊搜索） |
  | departmentId | number | 否 | 部门ID |
  | roleId | number | 否 | 角色ID |
- **响应示例**:
  ```json
  {
    "code": 200,
    "data": {
      "list": [
        {
          "id": 1,
          "name": "Jesen0823",
          "departmentId": 1,
          "roleId": 1,
          "avatarUrl": "http://localhost:9000/users/1/avatar/123.jpg"
        }
      ],
      "totalCount": 1
    }
  }
  ```

#### 2.6 获取用户头像
- **请求方式**: GET
- **接口路径**: `/api/users/{userId}/avatar/{filename}`
- **响应**: 返回头像图片

### 3. 部门相关

#### 3.1 创建部门
- **请求方式**: POST
- **接口路径**: `/api/department`
- **请求头**:
  | 参数名 | 类型 | 必选 | 描述 |
  | --- | --- | --- | --- |
  | Authorization | string | 是 | Bearer Token |
- **请求参数**:
  | 参数名 | 类型 | 必选 | 描述 |
  | --- | --- | --- | --- |
  | name | string | 是 | 部门名称 |
  | parentId | number | 否 | 父部门ID |
  | leader | string | 否 | 部门负责人 |
  | phone | string | 否 | 联系电话 |
  | status | number | 否 | 状态（1: 启用, 0: 禁用） |
- **响应示例**:
  ```json
  {
    "code": 200,
    "data": "创建部门成功~"
  }
  ```

#### 3.2 删除部门
- **请求方式**: DELETE
- **接口路径**: `/api/department/{departmentId}`
- **请求头**:
  | 参数名 | 类型 | 必选 | 描述 |
  | --- | --- | --- | --- |
  | Authorization | string | 是 | Bearer Token |
- **响应示例**:
  ```json
  {
    "code": 200,
    "data": "删除部门成功~"
  }
  ```

#### 3.3 更新部门
- **请求方式**: PATCH
- **接口路径**: `/api/department/{departmentId}`
- **请求头**:
  | 参数名 | 类型 | 必选 | 描述 |
  | --- | --- | --- | --- |
  | Authorization | string | 是 | Bearer Token |
- **请求参数**:
  | 参数名 | 类型 | 必选 | 描述 |
  | --- | --- | --- | --- |
  | name | string | 否 | 部门名称 |
  | parentId | number | 否 | 父部门ID |
  | leader | string | 否 | 部门负责人 |
  | phone | string | 否 | 联系电话 |
  | status | number | 否 | 状态（1: 启用, 0: 禁用） |
- **响应示例**:
  ```json
  {
    "code": 200,
    "data": "更新部门成功~"
  }
  ```

#### 3.4 获取部门详情
- **请求方式**: GET
- **接口路径**: `/api/department/{departmentId}`
- **请求头**:
  | 参数名 | 类型 | 必选 | 描述 |
  | --- | --- | --- | --- |
  | Authorization | string | 是 | Bearer Token |
- **响应示例**:
  ```json
  {
    "code": 200,
    "data": {
      "id": 1,
      "name": "技术部",
      "parentId": 0,
      "leader": "张三",
      "phone": "13800138000",
      "status": 1
    }
  }
  ```

#### 3.5 获取部门列表
- **请求方式**: POST
- **接口路径**: `/api/department/list`
- **请求头**:
  | 参数名 | 类型 | 必选 | 描述 |
  | --- | --- | --- | --- |
  | Authorization | string | 是 | Bearer Token |
- **请求参数**:
  | 参数名 | 类型 | 必选 | 描述 |
  | --- | --- | --- | --- |
  | offset | number | 否 | 偏移量 |
  | size | number | 否 | 每页数量 |
  | name | string | 否 | 部门名称（模糊搜索） |
  | leader | string | 否 | 部门负责人（模糊搜索） |
  | status | number | 否 | 状态（1: 启用, 0: 禁用） |
- **响应示例**:
  ```json
  {
    "code": 200,
    "data": {
      "list": [
        {
          "id": 1,
          "name": "技术部",
          "parentId": 0,
          "leader": "张三",
          "phone": "13800138000",
          "status": 1
        }
      ],
      "totalCount": 1
    }
  }
  ```

### 4. 菜单相关

#### 4.1 创建菜单
- **请求方式**: POST
- **接口路径**: `/api/menu`
- **请求头**:
  | 参数名 | 类型 | 必选 | 描述 |
  | --- | --- | --- | --- |
  | Authorization | string | 是 | Bearer Token |
- **请求参数**:
  | 参数名 | 类型 | 必选 | 描述 |
  | --- | --- | --- | --- |
  | name | string | 是 | 菜单名称 |
  | path | string | 是 | 菜单路径 |
  | icon | string | 否 | 菜单图标 |
  | parentId | number | 否 | 父菜单ID |
  | sort | number | 否 | 排序 |
  | status | number | 否 | 状态（1: 启用, 0: 禁用） |
- **响应示例**:
  ```json
  {
    "code": 200,
    "data": "创建菜单成功~"
  }
  ```

#### 4.2 删除菜单
- **请求方式**: DELETE
- **接口路径**: `/api/menu/{menuId}`
- **请求头**:
  | 参数名 | 类型 | 必选 | 描述 |
  | --- | --- | --- | --- |
  | Authorization | string | 是 | Bearer Token |
- **响应示例**:
  ```json
  {
    "code": 200,
    "data": "删除菜单成功~"
  }
  ```

#### 4.3 更新菜单
- **请求方式**: PATCH
- **接口路径**: `/api/menu/{menuId}`
- **请求头**:
  | 参数名 | 类型 | 必选 | 描述 |
  | --- | --- | --- | --- |
  | Authorization | string | 是 | Bearer Token |
- **请求参数**:
  | 参数名 | 类型 | 必选 | 描述 |
  | --- | --- | --- | --- |
  | name | string | 否 | 菜单名称 |
  | path | string | 否 | 菜单路径 |
  | icon | string | 否 | 菜单图标 |
  | parentId | number | 否 | 父菜单ID |
  | sort | number | 否 | 排序 |
  | status | number | 否 | 状态（1: 启用, 0: 禁用） |
- **响应示例**:
  ```json
  {
    "code": 200,
    "data": "更新菜单成功~"
  }
  ```

####  4.4 获取菜单详情
- **请求方式**: GET
- **接口路径**: `/api/menu/{menuId}`
- **请求头**:
  | 参数名 | 类型 | 必选 | 描述 |
  | --- | --- | --- | --- |
  | Authorization | string | 是 | Bearer Token |
- **响应示例**:
  ```json
  {
    "code": 200,
    "data": {
      "id": 1,
      "name": "首页",
      "path": "/home",
      "icon": "home",
      "parentId": 0,
      "sort": 1,
      "status": 1
    }
  }
  ```

#### 4.5 获取菜单列表
- **请求方式**: POST
- **接口路径**: `/api/menu/list`
- **请求头**:
  | 参数名 | 类型 | 必选 | 描述 |
  | --- | --- | --- | --- |
  | Authorization | string | 是 | Bearer Token |
- **请求参数**:
  | 参数名 | 类型 | 必选 | 描述 |
  | --- | --- | --- | --- |
  | offset | number | 否 | 偏移量 |
  | size | number | 否 | 每页数量 |
  | name | string | 否 | 菜单名称（模糊搜索） |
  | status | number | 否 | 状态（1: 启用, 0: 禁用） |
- **响应示例**:
  ```json
  {
    "code": 200,
    "data": {
      "list": [
        {
          "id": 1,
          "name": "首页",
          "path": "/home",
          "icon": "home",
          "parentId": 0,
          "sort": 1,
          "status": 1
        }
      ],
      "totalCount": 1
    }
  }
  ```

### 5. 角色相关

####  5.1 创建角色
- **请求方式**: POST
- **接口路径**: `/api/role`
- **请求头**:
  | 参数名 | 类型 | 必选 | 描述 |
  | --- | --- | --- | --- |
  | Authorization | string | 是 | Bearer Token |
- **请求参数**:
  | 参数名 | 类型 | 必选 | 描述 |
  | --- | --- | --- | --- |
  | name | string | 是 | 角色名称 |
  | menuList | array | 是 | 菜单ID列表 |
- **响应示例**:
  ```json
  {
    "code": 0,
    "data": "创建角色成功~"
  }
  ```

#### 5.2 删除角色
- **请求方式**: DELETE
- **接口路径**: `/api/role/{roleId}`
- **请求头**:
  | 参数名 | 类型 | 必选 | 描述 |
  | --- | --- | --- | --- |
  | Authorization | string | 是 | Bearer Token |
- **响应示例**:
  ```json
  {
    "code": 200,
    "data": "删除角色成功~"
  }
  ```

#### 5.3 更新角色
- **请求方式**: PATCH
- **接口路径**: `/api/role/{roleId}`
- **请求头**:
  | 参数名 | 类型 | 必选 | 描述 |
  | --- | --- | --- | --- |
  | Authorization | string | 是 | Bearer Token |
- **请求参数**:
  | 参数名 | 类型 | 必选 | 描述 |
  | --- | --- | --- | --- |
  | name | string | 否 | 角色名称 |
  | menuList | array | 否 | 菜单ID列表 |
- **响应示例**:
  ```json
  {
    "code": 0,
    "data": "修改角色成功~"
  }
  ```

#### 5.4 获取角色详情
- **请求方式**: GET
- **接口路径**: `/api/role/{roleId}`
- **请求头**:
  | 参数名 | 类型 | 必选 | 描述 |
  | --- | --- | --- | --- |
  | Authorization | string | 是 | Bearer Token |
- **响应示例**:
  ```json
  {
    "code": 200,
    "data": {
      "id": 1,
      "name": "管理员",
      "menuList": [1, 2, 3]
    }
  }
  ```

#### 5.5 获取角色菜单
- **请求方式**: GET
- **接口路径**: `/api/role/{roleId}/menu`
- **请求头**:
  | 参数名 | 类型 | 必选 | 描述 |
  | --- | --- | --- | --- |
  | Authorization | string | 是 | Bearer Token |
- **响应示例**:
  ```json
  {
    "code": 200,
    "data": [
      {
        "id": 1,
        "name": "首页",
        "path": "/home",
        "icon": "home",
        "parentId": 0,
        "sort": 1,
        "status": 1
      }
    ]
  }
  ```

#### 5.6 获取角色列表
- **请求方式**: POST
- **接口路径**: `/api/role/list`
- **请求头**:
  | 参数名 | 类型 | 必选 | 描述 |
  | --- | --- | --- | --- |
  | Authorization | string | 是 | Bearer Token |
- **请求参数**:
  | 参数名 | 类型 | 必选 | 描述 |
  | --- | --- | --- | --- |
  | offset | number | 否 | 偏移量 |
  | size | number | 否 | 每页数量 |
  | name | string | 否 | 角色名称（模糊搜索） |
- **响应示例**:
  ```json
  {
    "code": 200,
    "data": {
      "list": [
        {
          "id": 1,
          "name": "管理员",
          "menuList": [1, 2, 3]
        }
      ],
      "totalCount": 1
    }
  }
  ```

### 6. 商品分类相关

#### 6.1 创建商品分类
- **请求方式**: POST
- **接口路径**: `/api/category`
- **请求头**:
  | 参数名 | 类型 | 必选 | 描述 |
  | --- | --- | --- | --- |
  | Authorization | string | 是 | Bearer Token |
- **请求参数**:
  | 参数名 | 类型 | 必选 | 描述 |
  | --- | --- | --- | --- |
  | name | string | 是 | 分类名称 |
- **响应示例**:
  ```json
  {
    "code": 200,
    "data": "创建分类成功~"
  }
  ```

####  6.2 删除商品分类
- **请求方式**: DELETE
- **接口路径**: `/api/category/{categoryId}`
- **请求头**:
  | 参数名 | 类型 | 必选 | 描述 |
  | --- | --- | --- | --- |
  | Authorization | string | 是 | Bearer Token |
- **响应示例**:
  ```json
  {
    "code": 200,
    "data": "删除成功~"
  }
  ```

####  6.3 更新商品分类
- **请求方式**: PATCH
- **接口路径**: `/api/category/{categoryId}`
- **请求头**:
  | 参数名 | 类型 | 必选 | 描述 |
  | --- | --- | --- | --- |
  | Authorization | string | 是 | Bearer Token |
- **请求参数**:
  | 参数名 | 类型 | 必选 | 描述 |
  | --- | --- | --- | --- |
  | name | string | 是 | 分类名称 |
- **响应示例**:
  ```json
  {
    "code": 200,
    "data": "更新成功~"
  }
  ```

####  6.4 获取商品分类详情
- **请求方式**: GET
- **接口路径**: `/api/category/{categoryId}`
- **请求头**:
  | 参数名 | 类型 | 必选 | 描述 |
  | --- | --- | --- | --- |
  | Authorization | string | 是 | Bearer Token |
- **响应示例**:
  ```json
  {
    "code": 200,
    "data": {
      "id": 1,
      "name": "手机"
    }
  }
  ```

####  6.5 获取商品分类列表
- **请求方式**: POST
- **接口路径**: `/api/category/list`
- **请求头**:
  | 参数名 | 类型 | 必选 | 描述 |
  | --- | --- | --- | --- |
  | Authorization | string | 是 | Bearer Token |
- **请求参数**:
  | 参数名 | 类型 | 必选 | 描述 |
  | --- | --- | --- | --- |
  | offset | number | 否 | 偏移量 |
  | size | number | 否 | 每页数量 |
  | name | string | 否 | 分类名称（模糊搜索） |
- **响应示例**:
  ```json
  {
    "code": 200,
    "data": {
      "list": [
        {
          "id": 1,
          "name": "手机"
        }
      ],
      "totalCount": 1
    }
  }
  ```

####  6.6 获取商品分类商品数量
- **请求方式**: GET
- **接口路径**: `/api/category/goods/count`
- **请求头**:
  | 参数名 | 类型 | 必选 | 描述 |
  | --- | --- | --- | --- |
  | Authorization | string | 是 | Bearer Token |
- **响应示例**:
  ```json
  {
    "code": 200,
    "data": [
      {
        "categoryName": "手机",
        "count": 10
      }
    ]
  }
  ```

####  6.7 获取商品分类商品销量
- **请求方式**: GET
- **接口路径**: `/api/category/goods/sale`
- **请求头**:
  | 参数名 | 类型 | 必选 | 描述 |
  | --- | --- | --- | --- |
  | Authorization | string | 是 | Bearer Token |
- **响应示例**:
  ```json
  {
    "code": 200,
    "data": [
      {
        "categoryName": "手机",
        "sale": 100
      }
    ]
  }
  ```

####  6.8 获取商品分类商品收藏量
- **请求方式**: GET
- **接口路径**: `/api/category/goods/favor`
- **请求头**:
  | 参数名 | 类型 | 必选 | 描述 |
  | --- | --- | --- | --- |
  | Authorization | string | 是 | Bearer Token |
- **响应示例**:
  ```json
  {
    "code": 200,
    "data": [
      {
        "categoryName": "手机",
        "favor": 50
      }
    ]
  }
  ```

###  7. 商品相关

####  7.1 创建商品
- **请求方式**: POST
- **接口路径**: `/api/goods`
- **请求头**:
  | 参数名 | 类型 | 必选 | 描述 |
  | --- | --- | --- | --- |
  | Authorization | string | 是 | Bearer Token |
- **请求参数**:
  | 参数名 | 类型 | 必选 | 描述 |
  | --- | --- | --- | --- |
  | name | string | 是 | 商品名称 |
  | price | number | 是 | 商品价格 |
  | inventory | number | 是 | 商品库存 |
  | sale | number | 否 | 商品销量 |
  | favor | number | 否 | 商品收藏量 |
  | categoryIds | array | 是 | 分类ID列表 |
- **响应示例**:
  ```json
  {
    "code": 200,
    "data": "创建商品成功~"
  }
  ```

####  7.2 删除商品
- **请求方式**: DELETE
- **接口路径**: `/api/goods/{goodsId}`
- **请求头**:
  | 参数名 | 类型 | 必选 | 描述 |
  | --- | --- | --- | --- |
  | Authorization | string | 是 | Bearer Token |
- **响应示例**:
  ```json
  {
    "code": 200,
    "data": "删除成功~"
  }
  ```

####  7.3 更新商品
- **请求方式**: PATCH
- **接口路径**: `/api/goods/{goodsId}`
- **请求头**:
  | 参数名 | 类型 | 必选 | 描述 |
  | --- | --- | --- | --- |
  | Authorization | string | 是 | Bearer Token |
- **请求参数**:
  | 参数名 | 类型 | 必选 | 描述 |
  | --- | --- | --- | --- |
  | name | string | 否 | 商品名称 |
  | price | number | 否 | 商品价格 |
  | inventory | number | 否 | 商品库存 |
  | sale | number | 否 | 商品销量 |
  | favor | number | 否 | 商品收藏量 |
  | categoryIds | array | 否 | 分类ID列表 |
- **响应示例**:
  ```json
  {
    "code": 200,
    "data": "更新成功~"
  }
  ```

####  7.4 获取商品详情
- **请求方式**: GET
- **接口路径**: `/api/goods/{goodsId}`
- **请求头**:
  | 参数名 | 类型 | 必选 | 描述 |
  | --- | --- | --- | --- |
  | Authorization | string | 是 | Bearer Token |
- **响应示例**:
  ```json
  {
    "code": 200,
    "data": {
      "id": 1,
      "name": "iPhone 13",
      "price": 5999,
      "inventory": 100,
      "sale": 50,
      "favor": 25,
      "categoryIds": [1]
    }
  }
  ```

####  7.5 获取商品列表
- **请求方式**: POST
- **接口路径**: `/api/goods/list`
- **请求头**:
  | 参数名 | 类型 | 必选 | 描述 |
  | --- | --- | --- | --- |
  | Authorization | string | 是 | Bearer Token |
- **请求参数**:
  | 参数名 | 类型 | 必选 | 描述 |
  | --- | --- | --- | --- |
  | offset | number | 否 | 偏移量 |
  | size | number | 否 | 每页数量 |
  | name | string | 否 | 商品名称（模糊搜索） |
  | price | number | 否 | 商品价格 |
  | inventory | number | 否 | 商品库存 |
- **响应示例**:
  ```json
  {
    "code": 200,
    "data": {
      "list": [
        {
          "id": 1,
          "name": "iPhone 13",
          "price": 5999,
          "inventory": 100,
          "sale": 50,
          "favor": 25,
          "categoryIds": [1]
        }
      ],
      "totalCount": 1
    }
  }
  ```

####  7.6 获取商品统计数据
- **请求方式**: GET
- **接口路径**: `/api/goods/amount/list`
- **请求头**:
  | 参数名 | 类型 | 必选 | 描述 |
  | --- | --- | --- | --- |
  | Authorization | string | 是 | Bearer Token |
- **响应示例**:
  ```json
  {
    "code": 200,
    "data": [
      {
        "title": "商品总库存",
        "tips": "所有商品的总库存",
        "amount": "inventory",
        "value": 1000
      },
      {
        "title": "商品总收藏",
        "tips": "所有商品的总收藏",
        "amount": "sale",
        "value": 500
      },
      {
        "title": "商品总销量",
        "tips": "所有商品的总销量",
        "amount": "favor",
        "value": 250
      }
    ]
  }
  ```

####  7.7 获取商品地址销量
- **请求方式**: GET
- **接口路径**: `/api/goods/address/sale`
- **请求头**:
  | 参数名 | 类型 | 必选 | 描述 |
  | --- | --- | --- | --- |
  | Authorization | string | 是 | Bearer Token |
- **响应示例**:
  ```json
  {
    "code": 200,
    "data": [
      {
        "address": "北京",
        "sale": 100
      }
    ]
  }
  ```

####  7.8 获取商品分类商品数量（兼容路径）
- **请求方式**: GET
- **接口路径**: `/api/goods/category/count`
- **请求头**:
  | 参数名 | 类型 | 必选 | 描述 |
  | --- | --- | --- | --- |
  | Authorization | string | 是 | Bearer Token |
- **响应示例**:
  ```json
  {
    "code": 200,
    "data": [
      {
        "categoryName": "手机",
        "count": 10
      }
    ]
  }
  ```

####  7.9 获取商品分类商品销量（兼容路径）
- **请求方式**: GET
- **接口路径**: `/api/goods/category/sale`
- **请求头**:
  | 参数名 | 类型 | 必选 | 描述 |
  | --- | --- | --- | --- |
  | Authorization | string | 是 | Bearer Token |
- **响应示例**:
  ```json
  {
    "code": 200,
    "data": [
      {
        "categoryName": "手机",
        "sale": 100
      }
    ]
  }
  ```

#### 7.10 获取商品分类商品收藏量（兼容路径）
- **请求方式**: GET
- **接口路径**: `/api/goods/category/favor`
- **请求头**:
  | 参数名 | 类型 | 必选 | 描述 |
  | --- | --- | --- | --- |
  | Authorization | string | 是 | Bearer Token |
- **响应示例**:
  ```json
  {
    "code": 200,
    "data": [
      {
        "categoryName": "手机",
        "favor": 50
      }
    ]
  }
  ```

###  8. 文件相关

#### 8.1 上传用户头像
- **请求方式**: POST
- **接口路径**: `/api/upload/avatar`
- **请求头**:
  | 参数名 | 类型 | 必选 | 描述 |
  | --- | --- | --- | --- |
  | Authorization | string | 是 | Bearer Token |
  | Content-Type | string | 是 | multipart/form-data |
- **请求参数**:
  | 参数名 | 类型 | 必选 | 描述 |
  | --- | --- | --- | --- |
  | file | file | 是 | 头像文件 |
- **响应示例**:
  ```json
  {
    "code": 200,
    "data": {
      "newAvatarUrl": "http://localhost:9000/users/1/avatar/123.jpg"
    }
  }
  ```

### 9. 动态相关

####  9.1 创建动态
- **请求方式**: POST
- **接口路径**: `/api/moment`
- **请求头**:
  | 参数名 | 类型 | 必选 | 描述 |
  | --- | --- | --- | --- |
  | Authorization | string | 是 | Bearer Token |
- **请求参数**:
  | 参数名 | 类型 | 必选 | 描述 |
  | --- | --- | --- | --- |
  | title | string | 是 | 动态标题 |
  | contentHtml | string | 是 | 动态内容（HTML） |
  | contentText | string | 是 | 动态内容（纯文本） |
- **响应示例**:
  ```json
  {
    "code": 200,
    "data": "创建故事成功~"
  }
  ```

####  9.2 删除动态
- **请求方式**: DELETE
- **接口路径**: `/api/moment/{momentId}`
- **请求头**:
  | 参数名 | 类型 | 必选 | 描述 |
  | --- | --- | --- | --- |
  | Authorization | string | 是 | Bearer Token |
- **响应示例**:
  ```json
  {
    "code": 200,
    "data": "删除动态成功~"
  }
  ```

####  9.3 获取动态列表
- **请求方式**: POST
- **接口路径**: `/api/moment/list`
- **请求头**:
  | 参数名 | 类型 | 必选 | 描述 |
  | --- | --- | --- | --- |
  | Authorization | string | 是 | Bearer Token |
- **请求参数**:
  | 参数名 | 类型 | 必选 | 描述 |
  | --- | --- | --- | --- |
  | offset | number | 否 | 偏移量 |
  | size | number | 否 | 每页数量 |
  | title | string | 否 | 动态标题（模糊搜索） |
- **响应示例**:
  ```json
  {
    "code": 200,
    "data": {
      "list": [
        {
          "id": 1,
          "title": "新功能上线",
          "contentHtml": "<p>新功能上线了</p>",
          "contentText": "新功能上线了",
          "userId": 1,
          "createTime": "2023-01-01 00:00:00"
        }
      ],
      "totalCount": 1
    }
  }
  ```

### 10. 通用响应格式

所有API接口的响应格式统一为：

```json
{
  "code": 200,
  "data": {}
}
```

- **code**: 状态码，200表示成功，其他表示失败
- **data**: 响应数据，根据接口不同返回不同的数据结构

###  11. 认证要求

除了登录接口外，所有其他接口都需要在请求头中携带 `Authorization` 字段，格式为：

```
Authorization: Bearer <token>
```

其中 `<token>` 是登录接口返回的 JWT token。
