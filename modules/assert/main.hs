import Assert

main :: IO()
main = do
    assertEquals "one equals one" 1 1 
    assertEquals "one equals two" 1 2 