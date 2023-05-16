import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const gridSize = 3;
  const ticTacToeBox = (row, col) => {
    // To replicate exactly the secreenshot, and to whether decide if it's an X or O box
    // we have:
    //if row === 0 and col < 2 => O
    // if row === 1 and col > 2 => O
    // if row === 2 and col > 1 => O
    // the rest of the tictactoeBox is X
    const boxContent =
      (row === 0 && col < 2) || (row == 1 && col > 0) || (row == 2 && col > 1)
        ? "O"
        : "X";

    // to remove the border of the tictactoeBox, we will remove :
    // the left border of the first column and the top border of the first row
    // the right border of the last column and the bottom border of the last row
    const style = [
      styles.tictactoeBoxStyle,
      col === 0 && { borderLeftWidth: 0 },
      col === gridSize - 1 && { borderRightWidth: 0 },
      row === 0 && { borderTopWidth: 0 },
      row === gridSize - 1 && { borderBottomWidth: 0 },
    ];
    return (
      <View style={style} key={`${row} - ${col}`}>
        <Text style={styles.textStyle}>{boxContent}</Text>
      </View>
    );
  };

  const ticTacToeRow = (row) => {
    const boxes = [];
    for (let col = 0; col < gridSize; col++) {
      boxes.push(ticTacToeBox(row, col));
    }
    return (
      <View style={styles.tictactoeContainer} key={row}>
        {boxes}
      </View>
    );
  };

  const rows = [];
  for (let row = 0; row < gridSize; row++) {
    rows.push(ticTacToeRow(row));
  }

  return (
    <View style={[styles.container, { margin: 10 }]}>
      {rows}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  tictactoeContainer: {
    flexDirection: "row",
  },
  tictactoeBoxStyle: {
    borderWidth: 2,
    borderColor: "black",
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    fontSize: 60,
    fontWeight: "bold",
  },
});
