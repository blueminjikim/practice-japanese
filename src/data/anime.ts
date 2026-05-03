import type { Scenario } from './types'

export const anime: Scenario = {
  id: 'anime',
  level: 'beginner',
  title: '애니메이션',
  emoji: '⚔️',
  steps: [
    {
      id: 'anime_D1',
      label: '귀멸의 칼날 — 의지',
      expressions: [
        {
          id: 'anime_D1_01',
          scenario: 'anime',
          step: 'D1',
          ja: 'ぜったいに まもる',
          ko_pron: '젯타이니 마모루',
          ko: '반드시 지킨다',
          chunks: [
            { ja: 'ぜったいに', ko_pron: '젯타이니', ko: '반드시' },
            { ja: 'まもる', ko_pron: '마모루', ko: '지킨다' },
          ],
          assembly: {
            ja: 'おれが ぜったいに おまえを まもる',
            ko: '내가 반드시 너를 지킨다',
            chunks: [
              { ja: 'おれが', ko_pron: '오레가', ko: '내가' },
              { ja: 'ぜったいに', ko_pron: '젯타이니', ko: '반드시' },
              { ja: 'おまえを まもる', ko_pron: '오마에오 마모루', ko: '너를 지킨다' },
            ],
          },
          distractors: [
            { ja: 'かならず かつ', ko_pron: '카나라즈 카츠', ko: '반드시 이긴다' },
            { ja: 'ぜったいに にげない', ko_pron: '젯타이니 니게나이', ko: '절대로 도망가지 않는다' },
            { ja: 'かならず もどる', ko_pron: '카나라즈 모도루', ko: '반드시 돌아온다' },
          ],
          tip: '젯타이니(절대로/반드시)는 귀멸 탄지로의 결의 표현. 카나라즈도 같은 뜻으로 바꿔 쓸 수 있다.',
          tags: ['애니', '귀멸', '의지', '초급'],
        },
        {
          id: 'anime_D1_02',
          scenario: 'anime',
          step: 'D1',
          ja: 'あきらめるな',
          ko_pron: '아키라메루나',
          ko: '포기하지 마',
          chunks: [
            { ja: 'あきらめる', ko_pron: '아키라메루', ko: '포기하다' },
            { ja: 'な', ko_pron: '나', ko: '~지 마' },
          ],
          assembly: {
            ja: 'あきらめるな、まだ たたかえる',
            ko: '포기하지 마, 아직 싸울 수 있어',
            chunks: [
              { ja: 'あきらめるな', ko_pron: '아키라메루나', ko: '포기하지 마' },
              { ja: 'まだ', ko_pron: '마다', ko: '아직' },
              { ja: 'たたかえる', ko_pron: '타타카에루', ko: '싸울 수 있어' },
            ],
          },
          distractors: [
            { ja: 'にげるな', ko_pron: '니게루나', ko: '도망가지 마' },
            { ja: 'わすれるな', ko_pron: '와스레루나', ko: '잊지 마' },
            { ja: 'なくな', ko_pron: '나쿠나', ko: '울지 마' },
          ],
          tip: '동사 원형 + 나 = "~하지 마" 금지 명령. 짧고 강렬해서 애니 클라이맥스에 자주 등장.',
          tags: ['애니', '귀멸', '의지', '초급'],
        },
      ],
    },
    {
      id: 'anime_D2',
      label: '진격의 거인 — 감정',
      expressions: [
        {
          id: 'anime_D2_01',
          scenario: 'anime',
          step: 'D2',
          ja: 'うそだろ',
          ko_pron: '우소다로',
          ko: '거짓말이지 / 말도 안 돼',
          chunks: [
            { ja: 'うそ', ko_pron: '우소', ko: '거짓말' },
            { ja: 'だろ', ko_pron: '다로', ko: '이지 / 설마' },
          ],
          assembly: {
            ja: 'うそだろ、そんな はずが ない',
            ko: '거짓말이지, 그럴 리가 없어',
            chunks: [
              { ja: 'うそだろ', ko_pron: '우소다로', ko: '거짓말이지' },
              { ja: 'そんな はずが', ko_pron: '손나 하즈가', ko: '그럴 리가' },
              { ja: 'ない', ko_pron: '나이', ko: '없어' },
            ],
          },
          distractors: [
            { ja: 'まじか', ko_pron: '마지카', ko: '진짜야?' },
            { ja: 'ありえない', ko_pron: '아리에나이', ko: '있을 수 없어' },
            { ja: 'なんで だよ', ko_pron: '난데 다요', ko: '왜 그래' },
          ],
          tip: '우소(거짓말) + 다로(~이지?). 충격받았을 때 튀어나오는 말. 일상 대화에서도 자주 쓰인다.',
          tags: ['애니', '진격', '감정', '초급'],
        },
        {
          id: 'anime_D2_02',
          scenario: 'anime',
          step: 'D2',
          ja: 'たたかえ',
          ko_pron: '타타카에',
          ko: '싸워 / 싸워라',
          chunks: [
            { ja: 'たたかえ', ko_pron: '타타카에', ko: '싸워라' },
          ],
          assembly: {
            ja: 'あきらめずに たたかえ',
            ko: '포기하지 말고 싸워',
            chunks: [
              { ja: 'あきらめずに', ko_pron: '아키라메즈니', ko: '포기하지 말고' },
              { ja: 'たたかえ', ko_pron: '타타카에', ko: '싸워' },
            ],
          },
          distractors: [
            { ja: 'すすめ', ko_pron: '스스메', ko: '나아가라' },
            { ja: 'にげろ', ko_pron: '니게로', ko: '도망쳐' },
            { ja: 'まもれ', ko_pron: '마모레', ko: '지켜라' },
          ],
          tip: '타타카우(싸우다)의 명령형 타타카에. 진격의 에르빈 연설 장면에서 반복되는 표현.',
          tags: ['애니', '진격', '전투', '초급'],
        },
      ],
    },
    {
      id: 'anime_D3',
      label: '주술회전 — 동료',
      expressions: [
        {
          id: 'anime_D3_01',
          scenario: 'anime',
          step: 'D3',
          ja: 'まかせろ',
          ko_pron: '마카세로',
          ko: '맡겨 / 나한테 맡겨',
          chunks: [
            { ja: 'まかせろ', ko_pron: '마카세로', ko: '맡겨' },
          ],
          assembly: {
            ja: 'こういう ときは おれに まかせろ',
            ko: '이럴 때는 나한테 맡겨',
            chunks: [
              { ja: 'こういう ときは', ko_pron: '코—유— 토키와', ko: '이럴 때는' },
              { ja: 'おれに', ko_pron: '오레니', ko: '나한테' },
              { ja: 'まかせろ', ko_pron: '마카세로', ko: '맡겨' },
            ],
          },
          distractors: [
            { ja: 'おれが やる', ko_pron: '오레가 야루', ko: '내가 할게' },
            { ja: 'たすけてくれ', ko_pron: '타스케테 쿠레', ko: '도와줘' },
            { ja: 'きてくれ', ko_pron: '키테 쿠레', ko: '와줘' },
          ],
          tip: '마카세루(맡기다)의 명령형 마카세로. 고죠 사토루 느낌의 자신만만한 표현.',
          tags: ['애니', '주술회전', '동료', '초급'],
        },
        {
          id: 'anime_D3_02',
          scenario: 'anime',
          step: 'D3',
          ja: 'すごいな',
          ko_pron: '스고이나',
          ko: '대단하다 / 대박이다',
          chunks: [
            { ja: 'すごい', ko_pron: '스고이', ko: '대단해' },
            { ja: 'な', ko_pron: '나', ko: '~하다 (감탄)' },
          ],
          assembly: {
            ja: 'おまえ、ほんとうに すごいな',
            ko: '너, 진짜 대단하다',
            chunks: [
              { ja: 'おまえ', ko_pron: '오마에', ko: '너' },
              { ja: 'ほんとうに', ko_pron: '혼토—니', ko: '진짜로' },
              { ja: 'すごいな', ko_pron: '스고이나', ko: '대단하다' },
            ],
          },
          distractors: [
            { ja: 'やばいな', ko_pron: '야바이나', ko: '대박이다 (구어)' },
            { ja: 'かっこいいな', ko_pron: '칵코이—나', ko: '멋있다' },
            { ja: 'つよいな', ko_pron: '츠요이나', ko: '강하다' },
          ],
          tip: '어미 나는 혼잣말처럼 감탄할 때 붙인다. 스고이는 놀랍거나 훌륭할 때 두루 쓰이는 만능 표현.',
          tags: ['애니', '공통', '감탄', '초급'],
        },
      ],
    },
    {
      id: 'anime_D4',
      label: '공통 — 마음 표현',
      expressions: [
        {
          id: 'anime_D4_01',
          scenario: 'anime',
          step: 'D4',
          ja: 'しんじてくれ',
          ko_pron: '신지테 쿠레',
          ko: '믿어줘',
          chunks: [
            { ja: 'しんじて', ko_pron: '신지테', ko: '믿어' },
            { ja: 'くれ', ko_pron: '쿠레', ko: '줘' },
          ],
          assembly: {
            ja: 'おれを しんじてくれ、かならず かえる',
            ko: '나를 믿어줘, 반드시 돌아올게',
            chunks: [
              { ja: 'おれを しんじてくれ', ko_pron: '오레오 신지테 쿠레', ko: '나를 믿어줘' },
              { ja: 'かならず', ko_pron: '카나라즈', ko: '반드시' },
              { ja: 'かえる', ko_pron: '카에루', ko: '돌아올게' },
            ],
          },
          distractors: [
            { ja: 'まってくれ', ko_pron: '맛테 쿠레', ko: '기다려줘' },
            { ja: 'きいてくれ', ko_pron: '키이테 쿠레', ko: '들어줘' },
            { ja: 'みていてくれ', ko_pron: '미테이테 쿠레', ko: '지켜봐줘' },
          ],
          tip: '~테쿠레 = "~해줘" (친근하고 강한 부탁). 신지루(믿다)의 테형 + 쿠레.',
          tags: ['애니', '공통', '신뢰', '초급'],
        },
        {
          id: 'anime_D4_02',
          scenario: 'anime',
          step: 'D4',
          ja: 'いっしょに いく',
          ko_pron: '잇쇼니 이쿠',
          ko: '같이 갈게 / 같이 가',
          chunks: [
            { ja: 'いっしょに', ko_pron: '잇쇼니', ko: '같이' },
            { ja: 'いく', ko_pron: '이쿠', ko: '갈게' },
          ],
          assembly: {
            ja: 'おれも いっしょに いく、ひとりで いくな',
            ko: '나도 같이 갈게, 혼자 가지 마',
            chunks: [
              { ja: 'おれも いっしょに いく', ko_pron: '오레모 잇쇼니 이쿠', ko: '나도 같이 갈게' },
              { ja: 'ひとりで', ko_pron: '히토리데', ko: '혼자서' },
              { ja: 'いくな', ko_pron: '이쿠나', ko: '가지 마' },
            ],
          },
          distractors: [
            { ja: 'いっしょに たたかう', ko_pron: '잇쇼니 타타카우', ko: '같이 싸우자' },
            { ja: 'ひとりで いく', ko_pron: '히토리데 이쿠', ko: '혼자 갈게' },
            { ja: 'さきに いく', ko_pron: '사키니 이쿠', ko: '먼저 갈게' },
          ],
          tip: '잇쇼니(함께)는 일상에서도 자주 쓴다. "같이 밥 먹으러 가자" → 잇쇼니 타베니 이코—',
          tags: ['애니', '공통', '동료', '초급'],
        },
      ],
    },
  ],
}
