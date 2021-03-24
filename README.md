# Random Chart Generator

> 본 프로젝트는 Angular 와 PrimeNG, Chart.js 를 통해 랜덤하게 차트를 생성하게 만들었습니다.

---

## 프로젝트 소개

1. 본 프로젝트는 `Angular`, `PrimeNG`,`TypeScript`, `Scss`, `chart.js` 를 통해 구성했습니다.

2. `/` 페이지에는 각 차트 타이틀이 리스트로 보입니다.

3. `/memo` 페이지는 타이틀과 내용을 입력하여 랜덤하게 차트를 생성합니다.

4. `/room/:id` `id`는 랜덤하고 중복되지 않는 `string`이며 각각 리스트의 상세 페이지가 표시됩니다.

5. 메인화면 리스트의 타이틀과 컨텐츠는 `https://jsonplaceholder.typicode.com/`의 `API`를 이용해 `AJAX`를 요청했습니다.

#### 화면 예시

![image](https://user-images.githubusercontent.com/4216651/112336145-2aa67300-8d00-11eb-9c4f-860c6da0b019.png)

### 페이지별 소개

### `/`

- 좌측 상단의 `ADD RANDOM CHART`를 클릭하면 `/memo` 작성페이지로 이동합니다.
- 해당하는 리스트를 클릭하면 `/memo/:id` 로 이동하여 해당하는 차트의 상세내용을 표시합니다.
- 타이틀 버튼에 심심풀이 기능을 심어놓았습니다.
- 기존 리스트의 타이틀과 컨텐츠는 `https://jsonplaceholder.typicode.com/`를 통해서 `AJAX`를 통해서 `API` 요청하여 랜덤하게 `sort`해서 뽑아왔으며 갯수, 내부 내용 또한 랜덤하게 결정됩니다.

### `/memo`

- 타이틀과 컨텐츠에 글을 입력한뒤 `GENERATE`를 클릭해서 차트 포스트를 생성합니다.
- `Validation` 이 적용되어 있습니다.
- 좌상단의 `BACK` 버튼을 클릭하면 `/`로 이동합니다.

### `/memo/:id`

- 첫번째 `body`에서는 타이틀, 컨텐츠를 표시합니다.
- 두번째 `body`에서는 랜덤한 차트를 생성합니다.
- 차트는 종류, 키, 값 모두 랜덤하게 결정됩니다.
- 좌상단의 `BACK` 버튼을 클릭하면 `/`로 이동합니다.

#### 차트 종류

- `bar`, `doughnut`, `pie`, `line`, `radar`, `polarArea`

![image](https://user-images.githubusercontent.com/4216651/112339792-570fbe80-8d03-11eb-9f0a-a6e22ad6ea25.png)

#### 프리뷰

- 리스트

![randomlist](https://user-images.githubusercontent.com/4216651/112343734-c0dd9780-8d06-11eb-9aa7-eab70a4ff555.gif)

- 작성

![fine](https://user-images.githubusercontent.com/4216651/112344228-3ba6b280-8d07-11eb-91ed-2efe7e509576.gif)

## 프로젝트 실행

### 설치

1. 폴더 안에서 `npm install` 로 설치합니다.

```console
$ npm install
```

### 실행 (로컬)

1. 폴더 안에서 `npm run serve` 로 실행합니다.

```console
// 실행
$ npm start

// 빌드
$ npm run build
```

## 프로젝트 모듈 구조

```js
.
├── dist
├── e2e
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── details/
│   │   │   │   ├── details.component.html
│   │   │   │   ├── details.component.scss
│   │   │   │   ├── details.component.spec.ts
│   │   │   │   └── details.component.ts
│   │   │   ├── list/
│   │   │   │   ├── list.component.html
│   │   │   │   ├── list.component.scss
│   │   │   │   ├── list.component.spec.ts
│   │   │   │   └── list.component.ts
│   │   │   ├── memo/
│   │   │   │   ├── memo.component.html
│   │   │   │   ├── memo.component.scss
│   │   │   │   ├── memo.component.spec.ts
│   │   │   │   └── memo.component.ts
│   │   │   └── index.ts
│   │   ├── layout/
│   │   │   ├── app.component.html
│   │   │   ├── app.component.scss
│   │   │   ├── app.component.spec.ts
│   │   │   └── app.component.ts
│   │   ├── routes/
│   │   │   ├── app-routing.module.ts
│   │   │   ├── customs-routing.module.ts
│   │   │   └── index.ts
│   │   ├── scss/
│   │   │   └── mixin.scss
│   │   ├── service/
│   │   │   ├── data/
│   │   │   │   ├── data.service.ts
│   │   │   │   └── data.service.spec.ts
│   │   │   ├── list/
│   │   │   │   ├── list.service.ts
│   │   │   │   └── list.service.spec.ts
│   │   │   ├── memo/
│   │   │   │   ├── memo.service.ts
│   │   │   │   └── memo.service.spec.ts
│   │   │   └── index.ts
│   │   ├── typings/
│   │   │   └── index.ts
│   │   ├── app.module.ts
│   │   └── customs.modulde.ts
│   ├── assets
│   ├── environments
│   ├── index.html
│   ├── main.ts
│   ├── polyfills.ts
│   ├── styles.scss
│   └── test.ts
├── .browserslistrc
├── .editorconfig
├── angular.json
├── package.json
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.spec.json
└── tslint.json
```

1. `app/components/` 안에서 `details`, `list`, `memo` 모듈을 관리합니다.

2. `app/layout/` 에서는 `app` 모듈을 관리합니다.

3. `app/routes/` 에서 `/` 페이지는 `app-routing`으로 라우팅 관리하고 나머지 페이지는 `customs-routing`을 통해 `lazy routing loading`을 적용하였습니다.

4. `app/scss` 에서는 공통 `mixin`을 관리합니다.

5. `app/service/` 에서는 서비스 로직을 `data`, `list`, `memo` 모듈로 관리합니다.

6. `app/typings/` 에서 타입을 관리합니다.

7. `app/app.module.ts`, `app/customs.module.ts` 에서 모듈 저체를 관리합니다.

## 설치 패키지

#### package.json

```json
"dependencies": {
  "@angular/animations": "^11.2.5",
  "@angular/cdk": "^11.2.4",
  "@angular/common": "~11.2.5",
  "@angular/compiler": "~11.2.5",
  "@angular/core": "~11.2.5",
  "@angular/forms": "~11.2.5",
  "@angular/platform-browser": "~11.2.5",
  "@angular/platform-browser-dynamic": "~11.2.5",
  "@angular/router": "~11.2.5",
  "chart.js": "^2.9.4",
  "lodash": "^4.17.21",
  "primeicons": "^4.1.0",
  "primeng": "^11.3.1",
  "rxjs": "^6.6.6",
  "tslib": "^2.0.0",
  "zone.js": "~0.11.3"
},
"devDependencies": {
  "@angular-devkit/build-angular": "~0.1102.3",
  "@angular/cli": "~11.2.4",
  "@angular/compiler-cli": "~11.2.5",
  "@types/jasmine": "~3.6.0",
  "@types/lodash": "^4.14.168",
  "@types/node": "^12.11.1",
  "codelyzer": "^6.0.0",
  "jasmine-core": "~3.6.0",
  "jasmine-spec-reporter": "~5.0.0",
  "karma": "~6.1.0",
  "karma-chrome-launcher": "~3.1.0",
  "karma-coverage": "~2.0.3",
  "karma-jasmine": "~4.0.0",
  "karma-jasmine-html-reporter": "^1.5.0",
  "protractor": "~7.0.0",
  "ts-node": "~8.3.0",
  "tslint": "~6.1.0",
  "typescript": "~4.1.5"
}
```

1. `Angular CLI` 를 통해 프로젝트 세팅을 하였습니다.
2. `primeng` 및 `chart.js` 를 통해 디자인을 적용하였습니다.
3. `lodash`를 통해 필요 로직을 간단하게 구현하였습니다.

## 기타 참고 사항

> - 본 프로젝트는 크롬에서 테스트를 거쳤습니다.
