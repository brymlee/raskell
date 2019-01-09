module Assert where 
assertEquals :: (Show a, Eq a) => String -> a -> a -> IO()
assertEquals testLabel a b | a /= b = error $ "Test " ++ testLabel ++ " failed: Actual value " ++ (show a) ++ " does not equal expected " ++ (show b)
                           | a == b = putStr ""