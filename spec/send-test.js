describe("sumtotal関数のテスト", function(){
    it('senddataにテストが帰ってくる',function(){
        expect(senddata()).toHaveText('testcode');
    });
});