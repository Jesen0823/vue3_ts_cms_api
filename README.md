# Vue3-TS-CMS-API

Vue3-TS-CMS 是基于 NodeJS、TypeScript 、Koa、MySQL 等技术实现的后台管理系统 API 。拥有系统总览（核心技术、商品统计）、系统管理（用户管理、部门管理、菜单管理、角色管理）、商品中心（商品分类、商品信息）、动态（动态主页、动态列表）的 API 。采用 REST 设计风格。



## 运行步骤

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



