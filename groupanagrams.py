def groupAnagrams(strs):
    anagrams = {}
    for s in strs:
        s_sorted = "".join(sorted(s))
        if s_sorted not in anagrams:
            anagrams[s_sorted] = []
        anagrams[s_sorted].append(s)
    return [list(value) for key, value in anagrams.items()]

print(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))
print(groupAnagrams([""]))
print(groupAnagrams(["a"]))