# zihanki

## Build Status

[![CircleCI](https://circleci.com/gh/SnO2WMaN/zihanki.svg?style=svg)](https://circleci.com/gh/SnO2WMaN/zihanki)

## Setup

### 前提要件

#### Node.js

```
nodenv local
```

#### FOSSA CLI

```bash
curl -H 'Cache-Control: no-cache' https://raw.githubusercontent.com/fossas/fossa-cli/master/install.sh | bash
```

#### CircleCI CLI

```bash
curl -fLSs https://circle.ci/cli | bash
```

### 依存関係のインストール

```shell
yarn install --frozen-lockfile
```

### Git Hooks を有効化

```shell
npx lefthook install
```

### 環境変数

```env
FONTAWESOME_NPM_AUTH_TOKEN
FOSSA_API_KEY
ZEIT_TOKEN
```

## サードパーティ・ソフトウェア

[![FOSSA Status](https://app.fossa.com/api/projects/custom%2B14850%2Fssh%3A%2F%2Fgit%40github.com%2FSnO2WMaN%2Fzihanki.git.svg?type=large)](https://app.fossa.com/projects/custom%2B14850%2Fssh%3A%2F%2Fgit%40github.com%2FSnO2WMaN%2Fzihanki.git?ref=badge_large)
