{
    function throwError(msg : string) : never {
        throw new Error(msg);
    }

    throwError("Wrong Wrong Wrong");
}