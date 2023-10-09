import { Card, Text } from 'react-native-paper'

export function CardComponent ({ nome, tipoSanguineo }) {
    return (
        <Card>
            <Card.Title title = {nome} />
            <Card.Content>
                <Text>Tipo Sanguineo: {tipoSanguineo}
                </Text>
            </Card.Content>
        </Card>
    );
}