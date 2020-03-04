var txt = {
    "pt": {
        "navbar": "Início",
        "navbar1": "Sobre",
        "navbar2": "Destinos",
        "navbar3": "Serviços",
        "navbar4": "Contacto",
        "title_sobre": "Sobre",
        "sobre_title1": "As suas viagens em boas mãos",
        "sobre_text1_part_1": "Com profissionalismo e discrição prestamos serviços de transfers de e para o aeroporto, eventos corporativos, serviços às ordens e passeios turísticos.",
        "sobre_text1_part_2": "Se necessita de viajar entre resorts ou Hotéis, ir à praia, ao shopping, uma simples ida ao supermercado, fazer compras, visitar uma outra cidade, ir jogar uma partida de golfe, buscar um amigo, reuniões, casamentos ou apenas passear, estamos disponíveis para organizar qualquer transporte que seja necessário.",
        "sobre_title2": "Vantagens de um Transfere privado",
        "sobre_text2_part_1": "A maior parte das empresas de transferes cobram por cliente e não por viagem, isto quer dizer que muitas vezes o cliente depois de chegar ao aeroporto de Faro, pode ter que esperar por outras pessoas que vão para o mesmo destino. No nosso caso terá um motorista privado à sua espera nas chegadas do aeroporto, pronto para o levar ao seu destino. ",
        "sobre_text2_part_2": "Outra das vantagens é sem dúvida a rapidez com que chega, pois não tem que passar por outros locais a deixar outros clientes, é um serviço directo, de nós para si.",
        "sobre_title3": "Transportamos os seus animais",
        "sobre_text3_part_1": "O nosso serviço privado de transferes transporta os seus animais de estimação. Esse transporte é gratuito, desde que tenhamos sido informados durante a reserva efectuada. Os animais devem viajar acondicionados em caixas próprias",
        "sobre_text3_part_2": "para o efeito, e cumprindo quer as regras de segurança para os ocupantes, quer as regras de higiene estabelecidas. Podem ser transportados na bagageira do veículo ou na frente junto aos passageiros, consoante o tamanho da caixa.",
        "banner_carro_title": "PROCURA UM SERVIÇO EXCLUSIVO?",
        "banner_carro_text": "Se procura um serviço personalizado ou quer saber mais acerca dos nossos serviços, contacte-nos.",
        "banner_carro_link": "Vamos Falar",
        "title_destinos": "Destinos",
        "destinos_text": "Apresentamos aqui como sugestão, alguns dos pontos turisticos mais procurados para visitar no Sul de Portugal.",

    },
    "en": {
        "navbar": "Home",
        "navbar1": "About",
        "navbar2": "Destinos",
        "navbar3": "Serviços",
        "navbar4": "Contacto",
    }
};
$(function () {
    $("span").translate({
        default_lang: "pt",
        langs: "#langs",
        source: txt
    });
});