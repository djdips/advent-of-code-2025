
import java.io.*;
import java.nio.file.*;
import java.util.*;

public class InputReader {
    public static List<String> read(int day) {
        String filename = "../inputs/day" + String.format("%02d", day) + ".txt";
        try {
            return Files.readAllLines(Path.of(filename));
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }
}