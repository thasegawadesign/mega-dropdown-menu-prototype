# メガドロップダウンメニュー検証プロトタイプ

## デモ

![デモ](./public/demo.png)

企業サイトのグローバルナビゲーションを想定した、メガドロップダウンメニューのインタラクション検証用プロトタイプです。  
`Next.js + React + Tailwind CSS` で実装しています。

## 目的

- ホバー・フォーカス時の開閉挙動を検証する
- キーボード操作を含む基本的なアクセシビリティを確認する
- データ駆動でメニュー構造を管理し、拡張しやすい形にする

## 技術スタック

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- `@headlessui/react` / `clsx` / `lucide-react`

## セットアップ

```bash
pnpm install
```

## 開発コマンド

```bash
# 開発サーバー起動
pnpm dev

# 本番ビルド
pnpm build

# 本番起動
pnpm start

# Lint
pnpm lint
```

開発サーバー起動後、`http://localhost:3000` を開いて確認できます。

## 主な実装ポイント

- `components/MegaDropdownMenu.tsx`
  - メガメニュー本体
  - ポインター操作（開く/閉じる）と遅延クローズを実装
  - キーボード操作（`ArrowDown` / `Enter` / `Space` / `Escape`）を実装
  - `aria-*` 属性による関連付け（`aria-expanded`, `aria-controls`, `aria-labelledby`）
- `constants/mega-data.ts`
  - メニュー項目をデータとして定義
  - `navId` を union 型で管理し、IDの一貫性を担保
- `components/DisclosureButton.tsx`
  - 右端のメニューボタンUI

## ディレクトリ構成

```text
.
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── DisclosureButton.tsx
│   ├── Logo.tsx
│   └── MegaDropdownMenu.tsx
├── constants/
│   └── mega-data.ts
└── public/
    └── logo.svg
```

## メニュー構造の編集方法

メニュー項目の追加・変更は `constants/mega-data.ts` の `MEGA_SECTIONS` を編集します。

データを変更すると、`MegaDropdownMenu` が自動で描画します。

## 今後の拡張例

- モバイル向けナビゲーションの実装
- アニメーション・遷移の調整
- E2E テスト（Playwright など）で操作検証を自動化
