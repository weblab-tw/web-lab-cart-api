# 電商系統練習

## 主要分為兩個頁面

- 商品頁
- 購物車頁

## 商品頁

- 顯示商品 ID、名稱
- 功能一：選擇顏色、尺寸、數量 → 加入購物車

## 購物車頁

- 顯示商品 ID、名稱、顏色、尺寸、數量
- 功能一：修改商品數量
- 功能二：刪除商品

## API(json-server)

- GitHub: [https://github.com/max80713/web-lab-cart-api](https://github.com/max80713/web-lab-cart-api)
- host: [http://localhost:8080](http://localhost:8080)
- 商品
    - 取得商品
        - GET /products/:productID
- 購物車
    - 列表
        - GET /cart
    - 新增商品
        - POST /cart
    - 刪除商品
        - DELETE /cart/:itemID
    - 修改數量
        - PUT /cart/:itemID

## Note

- 至少建立 3 筆商品假資料
- 不需考慮會員登入機制
- 不需實作下單功能
- 前端：vanilla JS
- 後端：json-server


## 設計稿

- 產品頁
    
    ![Screen Shot 2021-09-19 at 9.22.37 PM.png](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/b112a505-624c-4719-af4e-ed9d06286b4e/Screen_Shot_2021-09-19_at_9.22.37_PM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220108%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220108T015003Z&X-Amz-Expires=86400&X-Amz-Signature=2cf84b22ef1f7c52fc1b590b49fd7522eca33eb8ca1c80524d41d3cedb15b2e6&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Screen%2520Shot%25202021-09-19%2520at%25209.22.37%2520PM.png%22&x-id=GetObject)
    

- 購物車頁
    
    ![Screen Shot 2021-09-19 at 9.22.43 PM.png](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F6ffeb23b-4de8-4b2f-9fb4-5cb616c6d939%2FScreen_Shot_2021-09-19_at_9.22.43_PM.png?table=block&id=c147528a-e46e-4b4d-a91f-8614a60242e9&spaceId=0892e1d0-77ee-42f5-8108-cfe485b9ef18&width=1400&userId=20bd4673-0ad9-4c58-9e65-9d2de1e2506a&cache=v2)