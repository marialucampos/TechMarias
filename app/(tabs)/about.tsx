import { Text, View, StyleSheet, ScrollView } from "react-native";

export default function About() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.title}>Sobre Nós</Text>
        <Text style={styles.text}>
          O <Text style={styles.bold}>TechMarias</Text> é muito mais do que um aplicativo — é uma comunidade vibrante e acolhedora que conecta mulheres na tecnologia. Nosso propósito é criar um espaço seguro, inspirador e colaborativo onde mulheres possam trocar experiências, compartilhar conhecimentos, encontrar apoio e crescer juntas profissionalmente.{"\n\n"}

          Sabemos que a representatividade importa. Por isso, o TechMarias foi criado para fortalecer redes de contato, promover oportunidades e impulsionar a presença feminina no setor tech. Seja você iniciante, estudante ou profissional experiente, aqui você encontra conexões reais, conteúdo relevante e uma rede pronta para te apoiar.{"\n\n"}

          Juntas, estamos construindo o futuro da tecnologia com mais inclusão, diversidade e protagonismo feminino.
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E6E6FA",
  },
  scroll: {
    paddingHorizontal: 90, // maior espaçamento lateral
    paddingVertical: 40,   // espaçamento superior/inferior maior
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#4B0082",
    marginBottom: 20,
    textAlign: "center",
  },
  text: {
    fontSize: 16,
    color: "#4B0082",
    textAlign: "justify",
    lineHeight: 24,
  },
  bold: {
    fontWeight: "bold",
  },
});
