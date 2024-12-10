import { LanguageSelector } from "./components/LanguageSelector";
import { LevelSelector } from "./components/LevelSelector";
import { QuestionCard } from "./components/QuestionCard";
import { ScoreBoard } from "./components/ScoreBoard";
import { GameOver } from "./components/GameOver";
import { TurnIndicator } from "./components/TurnIndicator";
import { useGameLogic } from "./hooks/useGameLogic";

function App() {
  const {
    gameState,
    handleLanguageSelect,
    handleLevelSelect,
    handleAnswer,
    restartGame,
  } = useGameLogic();

  return (
    <div className="w-full h-dvh flex justify-center items-center">
      <div className="h-fit bg-gray-100 p-8 w-[70%] rounded-md">
        <div className="max-w-3xl mx-auto space-y-8">
          <h1 className="text-4xl font-bold text-center text-indigo-600">
            Programming Quiz Battle
          </h1>

          <ScoreBoard
            players={gameState.players}
            currentPlayer={gameState.currentPlayer}
          />

          <div className="grid grid-cols-1 gap-6">
            <div className="md:col-span-2">
              {gameState.gameOver ? (
                <GameOver players={gameState.players} onRestart={restartGame} />
              ) : (
                <>
                  <TurnIndicator
                    playerName={gameState.players[gameState.currentPlayer].name}
                    round={Math.floor(gameState.currentQuestion / 2) + 1}
                  />

                  {gameState.selectionPhase === "language" && (
                    <LanguageSelector onSelect={handleLanguageSelect} />
                  )}

                  {gameState.selectionPhase === "level" && (
                    <LevelSelector onSelect={handleLevelSelect} />
                  )}

                  {gameState.selectionPhase === "question" &&
                    gameState.currentLanguage &&
                    gameState.currentLevel && (
                      <QuestionCard
                        language={gameState.currentLanguage}
                        level={gameState.currentLevel}
                        questionIndex={Math.floor(
                          gameState.currentQuestion / 2
                        )}
                        onAnswer={handleAnswer}
                      />
                    )}
                </>
              )}
            </div>

            {/* <div className="space-y-4">
            <QuestionHistory 
              history={questionHistory}
              currentPlayer={gameState.currentPlayer}
            />
          </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
