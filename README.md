# Dev Knowledge Base

Astro v5 と Starlight で構築した個人用の技術ナレッジベースです。

## 📁 ディレクトリ構造と運用ルール
- `src/content/docs/lean/` : 
- `src/content/docs/blog/` : 日々の検証ログやエラー対処メモ（Flow情報）
- `src/assets/` : 記事内で使用する画像ファイル（PNG/WebP）

## 🚀 主なコマンド
- `npm run dev` : 開発サーバーを起動してローカル確認
- `npm run build` : 本番サイト用のビルドを実行

## 💡 執筆メモ
- 本文の見出しは `##`（H2）からスタートする（H1はタイトルで自動生成されるため）
- 下書き状態で保存する場合はフロントマターに `draft: true` を付与する