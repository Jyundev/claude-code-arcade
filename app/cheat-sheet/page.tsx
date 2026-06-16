import type { Metadata } from 'next'
import CheatTable, { type CheatRow } from '@/components/CheatTable'

export const metadata: Metadata = {
  title: 'CHEAT SHEET — CLAUDE CODE ARCADE',
  description: '단축키 + 슬래시 커맨드 + 입력 모드 전체 레퍼런스 한 페이지.',
}

const SHORTCUTS: CheatRow[] = [
  { combo: 'Esc', desc: '생성 중인 응답 즉시 중단 (interrupt)' },
  { combo: 'Esc Esc', desc: '이전 메시지로 되돌아가 편집 / 대화 rewind' },
  { combo: 'Shift + Tab', desc: '권한 모드 순환 — 자동 수락 ↔ plan 모드' },
  { combo: 'Ctrl + R', desc: '도구 출력 펼치기 / verbose 토글' },
  { combo: 'Ctrl + L', desc: '터미널 화면 지우기 (대화는 유지)' },
  { combo: 'Ctrl + C', desc: '입력 취소 / 한 번 더로 종료' },
  { combo: 'Ctrl + D', desc: '세션 종료' },
  { combo: '↑ / ↓', desc: '이전에 보낸 메시지 히스토리 탐색' },
]

const INPUT_MODES: CheatRow[] = [
  { combo: '@', desc: '파일·폴더 멘션 — 정확한 컨텍스트를 콕 집어 전달' },
  { combo: '#', desc: '메모리 추가 — 그 자리에서 CLAUDE.md에 기록' },
  { combo: '!', desc: 'bash 모드 — 셸 명령을 직접 실행하고 출력을 공유' },
  { combo: '/', desc: '슬래시 커맨드 실행' },
  { combo: '\\ + Enter', desc: '줄바꿈 (여러 줄 입력)' },
  { combo: 'Option + Enter', desc: 'macOS 줄바꿈 (/terminal-setup 후)' },
]

const SLASH: CheatRow[] = [
  { combo: '/init', desc: '코드베이스를 분석해 CLAUDE.md 초안 생성' },
  { combo: '/clear', desc: '대화 컨텍스트 초기화 — 새 작업 시작 전 필수' },
  { combo: '/compact', desc: '대화를 요약 압축해 컨텍스트 절약' },
  { combo: '/model', desc: '모델 변경 (Opus / Sonnet / Haiku)' },
  { combo: '/review', desc: 'PR 또는 변경사항 코드 리뷰' },
  { combo: '/memory', desc: 'CLAUDE.md 등 메모리 파일 열어 편집' },
  { combo: '/agents', desc: '서브에이전트 생성·관리' },
  { combo: '/mcp', desc: 'MCP 서버 연결·관리' },
  { combo: '/hooks', desc: '자동화 훅 설정' },
  { combo: '/cost', desc: '현재 세션 토큰 사용량 확인' },
  { combo: '/config', desc: '설정 (테마·모델 등) 변경' },
  { combo: '/terminal-setup', desc: 'Shift+Enter 줄바꿈 키 설정' },
  { combo: '/doctor', desc: '설치 상태 진단' },
  { combo: '/help', desc: '전체 명령어 도움말' },
]

export default function CheatSheetPage() {
  return (
    <div className="scanline-bg flex flex-col gap-12">
      <header className="flex flex-col gap-4">
        <span className="font-arcade text-[9px] tracking-[0.3em] text-neon-yellow">
          CONTINUE? · PRESS ANY KEY
        </span>
        <h1 className="text-gradient-title text-gradient-title-glow font-arcade text-2xl leading-[1.4] sm:text-3xl">
          CHEAT SHEET
        </h1>
        <p className="max-w-xl text-sm leading-relaxed text-neutral-400">
          외울 필요 없다. 이 페이지를 북마크하고 필요할 때 펼쳐봐라. 손이
          키보드를 떠나지 않을수록 빨라진다.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <CheatTable title="KEYBOARD" rows={SHORTCUTS} color="pink" />
        <CheatTable title="INPUT MODES" rows={INPUT_MODES} color="orange" />
      </div>

      <CheatTable title="SLASH COMMANDS" rows={SLASH} color="purple" />

      <p className="text-center font-arcade text-[8px] leading-relaxed text-neutral-600">
        버전에 따라 일부 키·명령이 다를 수 있다 · /help 로 항상 최신 목록 확인
      </p>
    </div>
  )
}
