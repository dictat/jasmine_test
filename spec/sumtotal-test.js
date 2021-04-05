describe("sumtotal関数のテスト", function(){
    it("5+9=14", function(){
        expect(sumtotal(5, 9)).toBe(14);
    });
    it("-1+1=0", function(){
        expect(sumtotal(-1, 1)).toBe(0);
    });
    it("0+1=1", function(){
        expect(sumtotal(0, 1)).toBe(0);
    });
    it("-1-1=-2", function(){
        expect(sumtotal(-1, -1)).toBe(-2);
    });
});
