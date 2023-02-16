export const apexService = {

    async getApexPlayer() {
        const res = await fetch(`https://api.mozambiquehe.re/bridge?player=Ebabala&platform=PC`, {
            headers: {
                Authorization: 'b9a51db37c007062cbf4cd5076325680'
            }
        });
        if (!res.ok) {
            throw new Error(`Could not fetch https://api.mozambiquehe.re/bridge?player=Ebabala&platform=PC, received ${res.status}`);
        }
        return res.json();
    },}