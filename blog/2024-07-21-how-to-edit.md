---
slug: how-to-edit
title: 如何編輯本指南
authors: TNTsky
tags: [指南維護]
---

在這裡提供關於本網站編輯的教學，供管理員或其他願意協助編輯的成員參考。

<!-- truncate -->
:::success 本頁主要針對希望自行編輯的用戶，如僅需修改少部分內容，可直接聯繫管理員。
:::

## 基本要求

### 熟悉 Markdown 語法
* Markdown 是一種輕量級的標記語言，以其簡潔易讀的特性廣泛應用於文檔撰寫和網頁內容創建。
* Discord 也支援部分 Markdown 語法。學習 Markdown 十分簡單，幾分鐘即可掌握基本用法。
* 可通過 YouTube 或 B站等平台觀看相關教學視頻來學習。

### 擁有 GitHub 帳號
* 網站代碼儲存在 GitHub 上，編輯需要擁有一個 GitHub 帳號。

### (可選)學習 Git 用法
* Git 是一款版本控制系統，用於方便地管理和協作編輯文件。
* 可以自學 Git 基本操作，如 `pull`、`add`、`commit` 和 `push`。對於不熟悉 Git 的用戶，可以使用 Visual Studio Code 內建的 Git 管理工具，避免直接使用命令行。
* 也可以直接通過每頁底部的「編輯此頁」按鈕進行修改。

### (可選)申請加入協作者
* 聯繫管理員說明你希望協助編輯指南。
* 成為協作者可省略 Fork 和 Pull Request 等步驟，對不熟悉 GitHub 的用戶尤其有幫助。


## 方法一: 直接點擊「編輯此頁」
<details>
    <summary>優缺點</summary>
    * 優點
        * 修改單一檔案時較為方便。
        * 可在手機等設備上輕鬆操作。
    * 缺點
        * 無法預覽修改效果，需要等待網站構建完成（約兩分鐘）。
        * 修改多個文件時，每次 commit 都會觸發網站構建，可能會導致工作流程阻塞。
        * 新增頁面較為繁瑣。
</details>
* 此方法幾乎不需要學習 Git。
* 點擊後會直接跳轉到代碼頁面，可直接進行修改。
* 僅適合編輯單一頁面內容。若需修改多個頁面，請使用方法二。

## 方法二: 複製儲存庫至本地
:::warning 環境需求
需備有git與node.js環境，請自行爬文安裝
:::
* 在此皆以 VS Code 做示範

### 本地建構
1. 在你想放置資料夾的地方點擊最上方路徑並輸入：
    ```bash
    git clone https://github.com/TNTsky/SPKsmp-Docs.git
    ```
    ![alt text](image-8.png)
2. 對出現的資料夾右鍵點選 `以Code開啟`(或是拖進VScode):\
    ![alt text](image.png)
3. 點擊 `` Ctrl+Shift+` `` 開啟終端並輸入:
   ```bash
    npm install
    ```
4. 輸入以下命令運行專案
    ```bash
    npm run start -- --host 0.0.0.0
    ```
5. 即可在瀏覽器 `<本機IP>:3000` 進行預覽

### 編輯流程
1. 在每次編輯前先使用擷取(Fetch)確認是否有更新\
   ![alt text](image-1.png)
2. (若有更新)確認後點擊提取(Pull)\
![alt text](image-6.png)
3. 運行專案進行實時預覽
    ```bash
    npm run start -- --host 0.0.0.0
    ```
4. 參考下方[專案結構](#docusaurus專案架構)編寫內容
   * 若不熟悉語法可在HackMD編寫後再複製過來
   * 甚至想要在DC打也可以，畢竟支援語法
   * VScode右上方按鈕開啟預覽\
     ![alt text](image-9.png)
   * 須注意有些語法可能無法支援，請以網頁預覽為主
5. 每次 `Ctrl+S` 保存時網頁皆會自動刷新
6. 完成修改確認後即可提交Commit
   <details>
        <summary>提交步驟</summary>
           1. 點擊 `+` 確認修改\
            ![alt text](image-2.png)
           2. 簡單填寫內容後點擊提交(Commit)\
            ![alt text](image-3.png)
           3. 點擊推送(Push)\
            ![alt text](image-4.png)
            4. 依照提示登入Github帳號\
            ![alt text](image-5.png)
            
    </details>

## 頁面修改與添加

:::success 小提示
VScode在Markdown語法添加圖片時可直接貼上
:::

### Docusaurus專案架構
```
SPKsmp-Docs             // 根目錄
├── blog                // 部落格文章
│   ├── 2024-09-31-hola.md
│   ├── 2024-02-30-hello-world.md
└── docs                // 文檔
    ├── 類別 1
    │   ├── _category_.json // 類別配置(檔名固定)
    │   ├── doc1-1.md
    │   └── doc1-2.md
    ├── 類別 2
    │   ├── _category_.json
    │   └── doc2-1.md
    └── intro.md        // 文檔首頁
```

> Markdown檔案的添加挺容易上手的，格式可參考已有的檔案

### 文檔
* 位於根目錄下的`/docs`資料夾
* 內部每個資料夾皆為一個類別，顯示在網頁左方選單
* 新增類別(資料夾)時內部需包含`_category_.json`檔案

### Blog
* 位於根目錄下的`/blog`資料夾
* `authors.yml`存放著作者資訊
* `tags.yml`存放標籤資訊


#### 其餘內容在不清楚是甚麼的情況下別動

有點懶圖片就全部堆一起惹\
有空再分資料夾(_　_)。゜zｚＺ

:::success 提交Commit後，可在 [Action頁面](https://github.com/TNTsky/SPKsmp-Docs/actions/workflows/deploy.yml) 確認網頁是否建構成功
:::