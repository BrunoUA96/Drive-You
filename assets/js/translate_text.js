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
        "service_diamond_title": "Serviço privado",
        "service_diamond_text": "O facto de não partilhar a nossa viatura com outros clientes, faz com que não existam outras bagagens que não as suas, e que não hajam outras paragens que não o seu destino final de férias.",
        "service_certificad_title": "Certificados",
        "service_certificad_text": "Somos certificados e licenciados pelo aeroporto de Faro para o serviço de transfers, e cumprimos com todos os requisitos de segurança estipulados.",
        "service_fixas_title": "Tarifas fixas",
        "service_fixas_text": "Na nossa empresa o cliente sabe o preço final da viagem antes de a nossa viatura arrancar, ao contrário dos serviços normais como táxis públicos.",
        "service_24_title": "Serviço 24/7",
        "service_24_text": "Garantimos aos nossos clientes um serviço 24 horas por dia, 7 dias por semana e 365 dias por anos, estamos sempre ao seu dispor.",
        "service_bagagem_title": "Bagagem",
        "service_bagagem_text": "Apenas o espaço do nosso veículo estabelece o limite da sua bagagem, pois para além de não ser cobrado este serviço (é cobrado no serviço de táxi comum), não existe limite do número de volumes.",
        "service_reservas_title": "Reservas online",
        "service_reservas_text": "Precisamos apenas que nos envie a morada do seu destino de férias e dos detalhes do seu voo para que o serviço seja garantido. Asseguramos que o preço final estabelecido não sofrerá qualquer alteração nem nenhuma taxa surpresa. ",
        "contact_telephone": "Telefone",
        "contact_location": "Localização",
        "contact_email": "Email",
        "viagem_medida_title": "Precisa de uma viagem à sua medida?",
        "viagem_medida_btn": "Reservar"
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