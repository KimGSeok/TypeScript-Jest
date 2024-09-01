### TypeScript-Jest
## Unit Test
프론트엔드에 적용되는 유닛 테스트 적용 및 테스트 프로젝트

# 목표
1. 코드의 안정성과 신뢰성
2. 리팩토링에 대한 내성
3. 테스트코드 자체가 프로젝트 코드의 명세를 나타낼 수 있는 기반

# 테스트 범위
유닛 테스트를 공부하고, 적용하기까지에는 많은 고민이 있었어요.
1. 어디까지 테스트를 해야할까?
2. UI의 변화까지 테스트를 해야하나?
3. 비즈니스 로직만 테스트를 해야하나?

해보기전에는 그저 고민만 하다가 끝날 것 같아서, 해보면서 점진적 개선을 목표로 진행을 하려고 해요.
1. Atomic한 컴포넌트로 Semantic Tag에 대한 동작 유닛 테스트
2. Semantic Tag를 결합한 Widgets 컴포넌트 테스트
3. 테스트 코드를 작성할 시, 브라우저 이벤트의 핸들링
4. 프론트엔드 컴포넌트의 격리

# GWT(BDD) vs AAA(TDD) ?
Given (준비)
테스트를 위해서 준비하는 과정(변수, 입력값, Mock)

When (실행)
테스트 코드 실행

Then (검증)
테스트 검증

------------------------------------------------------------
Assignment (준비)
테스트 코드를 실행하기 전에 시스템이 적절한 상태인지 확인

Act (실행)
테스트 코드 실행

Assert (단언)
실행한 코드가 기대한 결과로 동작하는지 
